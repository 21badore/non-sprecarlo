# Non Sprecarlo — Salvatore Sardu Films

Sito web per il cortometraggio **Non Sprecarlo** di Salvatore Sardu.  
Stack: Next.js 14 · TypeScript · Tailwind CSS · Resend · MDX

---

## Setup locale

```bash
# 1. Installa dipendenze
npm install

# 2. Copia il file env e inserisci le chiavi
cp .env.local.example .env.local

# 3. Avvia il server di sviluppo
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

---

## Variabili d'ambiente

| Variabile | Descrizione |
|-----------|-------------|
| `RESEND_API_KEY` | Chiave API Resend (dashboard: API Keys) |
| `RESEND_AUDIENCE_ID` | ID del pubblico Resend per la newsletter |

Senza queste chiavi, il form newsletter funziona in **dev mode** (risposta simulata, nessuna email inviata).

---

## Come aggiungere una news

1. Crea un file `.mdx` in `content/news/`, es. `04-nuova-news.mdx`
2. Aggiungi il frontmatter:

```mdx
---
title: "Titolo della news"
date: "2026-06-01"
excerpt: "Breve descrizione che appare nelle anteprime."
---

Testo completo della news in Markdown.
```

3. La news apparirà automaticamente in `/news` e nella home (le ultime 3).

---

## Come sostituire il trailer Vimeo

In `components/VideoEmbed.tsx`, sostituisci `vimeoId="000000000"` con l'ID reale del video su Vimeo.

---

## Come aggiungere le immagini reali

- **Foto del film**: `public/images/film/film-01.png` … `film-06.png`
- **Foto backstage**: `public/images/backstage/` (aggiorna i path in `components/Backstage.tsx`)

---

## Deploy su Vercel

1. Connetti il repo GitHub su [vercel.com](https://vercel.com)
2. In **Settings > Environment Variables** aggiungi `RESEND_API_KEY` e `RESEND_AUDIENCE_ID`
3. Deploy automatico ad ogni push su `main`
