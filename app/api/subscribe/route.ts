import { NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { error: ">>> EMAIL NON VALIDA." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!apiKey || !audienceId) {
      // Dev mode: risposta simulata senza chiamata reale
      return NextResponse.json({ ok: true, dev: true }, { status: 200 });
    }

    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          unsubscribed: false,
        }),
      }
    );

    if (res.status === 409) {
      return NextResponse.json({ error: ">>> GIÀ ISCRITTO." }, { status: 409 });
    }

    if (!res.ok) {
      return NextResponse.json(
        { error: ">>> ERRORE. RIPROVA." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: ">>> ERRORE DI RETE." },
      { status: 500 }
    );
  }
}
