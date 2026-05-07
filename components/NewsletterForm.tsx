"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "ok" | "error" | "duplicate";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("ok");
        setMessage("Iscritto. Controlla la mail.");
        setEmail("");
      } else if (res.status === 409) {
        setStatus("duplicate");
        setMessage("Sei già iscritto.");
      } else {
        setStatus("error");
        setMessage(data.error || "Errore. Riprova.");
      }
    } catch {
      setStatus("error");
      setMessage("Errore di rete. Riprova.");
    }
  }

  const buttonLabel =
    status === "ok" ? "Iscritto" : status === "loading" ? "..." : "Iscriviti";

  return (
    <>
      <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          placeholder="la-tua-mail@dominio.it"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "ok"}
          aria-label="Email per la newsletter"
          required
        />
        <button type="submit" disabled={status === "loading" || status === "ok"}>
          {buttonLabel}
          {status !== "ok" && <span>→</span>}
        </button>
      </form>
      {message && (
        <span className="newsletter-status" role="alert">
          {message}
        </span>
      )}
    </>
  );
}
