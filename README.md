# Fashion Briefing PWA

## File inclusi
- `index.html` — App principale
- `manifest.json` — Configurazione PWA
- `sw.js` — Service worker (offline support)
- `icon-192.svg` — Icona app

## Come installare

### Opzione A — Hosting gratuito con Netlify (consigliato, 2 minuti)
1. Vai su https://app.netlify.com/drop
2. Trascina l'intera cartella `fashion-briefing-pwa`
3. Netlify ti dà un URL pubblico (es. `https://fashion-brief-xyz.netlify.app`)
4. Aprilo da iPhone/Android → "Aggiungi a schermata Home"

### Opzione B — GitHub Pages
1. Crea un repository GitHub pubblico
2. Carica tutti i file nella root
3. Vai in Settings → Pages → Branch: main
4. URL: `https://tuousername.github.io/fashion-briefing`

### Opzione C — Server aziendale
Copia tutti i file in una cartella servita da nginx/Apache.
Assicurati che il server serva su HTTPS (richiesto per PWA).

## Aggiungere alla Home su iPhone
1. Apri l'URL in Safari
2. Tocca il pulsante Condividi (rettangolo con freccia)
3. Scorri e tocca "Aggiungi a schermata Home"
4. Conferma → l'app appare come un'app nativa

## Nota API
L'app usa l'API Anthropic direttamente dal browser.
Per produzione, considera di aggiungere una chiave API tramite
una variabile d'ambiente su Netlify o un proxy backend.
