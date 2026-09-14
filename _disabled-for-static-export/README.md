# Codice disattivato per l'export statico

Il sito è configurato con `output: "export"` in `next.config.mjs`, cioè viene
generato come sito statico (cartella `out/`) da caricare su Netlify trascinando
la cartella.

Un sito statico non può eseguire codice sul server, quindi la route
`api/subscribe` (iscrizione newsletter via Resend) è stata spostata qui invece
di essere cancellata.

## Per riattivare la newsletter

1. Rimuovi `output: "export"` da `next.config.mjs`
2. Sposta `api/` di nuovo dentro `app/`
3. Fai il deploy come app Next.js completa (repo collegato a Netlify, non
   cartella trascinata), impostando `RESEND_API_KEY` e `RESEND_AUDIENCE_ID`
   nelle variabili d'ambiente
