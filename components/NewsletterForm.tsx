"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error" | "duplicate";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
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

  return (
    <div className="max-w-xl">
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="la tua email"
            required
            disabled={status === "loading" || status === "success"}
            className="flex-1 bg-transparent border-b border-white/40 px-1 py-3 font-display text-base md:text-lg placeholder:text-white/40 focus:outline-none focus:border-[#C75D3D] transition-colors duration-200 disabled:opacity-50"
            aria-label="Indirizzo email per la newsletter"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="font-mono-custom text-[11px] tracking-[0.25em] uppercase px-6 py-3 bg-[#C75D3D] hover:bg-[#a94a2d] transition-colors duration-200 disabled:opacity-50 whitespace-nowrap"
          >
            {status === "loading" ? "..." : "Iscriviti"}
          </button>
        </div>
      </form>

      {message && (
        <p
          className={`font-mono-custom text-xs tracking-wide mt-4 ${
            status === "success" ? "text-white/80" : "text-[#FFB088]"
          }`}
          role="alert"
        >
          {message}
        </p>
      )}
    </div>
  );
}
