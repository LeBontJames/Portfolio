# 📋 Template Setup Checklist

Usa questa checklist per configurare correttamente il template per ogni nuovo progetto.

## 🎯 Prima di Iniziare

- [ ] Clona/copia il template in una nuova cartella
- [ ] Inizializza un nuovo repository Git
  ```bash
  git init
  git add .
  git commit -m "Initial commit from template"
  ```

## ⚙️ Configurazione Base

### 1. Variabili d'Ambiente
- [ ] Copia `.env.example` in `.env.local`
- [ ] Aggiorna `NEXT_PUBLIC_SITE_URL` con il tuo dominio
- [ ] Aggiorna `NEXT_PUBLIC_SITE_NAME` con il nome del sito
- [ ] Configura Google Analytics ID (opzionale)
- [ ] Configura altre variabili necessarie

### 2. Configurazione Sito
Modifica `src/config/site.js`:
- [ ] Aggiorna `SITE_CONFIG.name`
- [ ] Aggiorna `SITE_CONFIG.title`
- [ ] Aggiorna `SITE_CONFIG.description`
- [ ] Aggiorna `SITE_CONFIG.url`
- [ ] Aggiorna link social media
- [ ] Aggiorna keywords
- [ ] Aggiorna informazioni di contatto

### 3. Metadata SEO
Modifica `src/app/layout.js`:
- [ ] Aggiorna title e title template
- [ ] Aggiorna description (150-160 caratteri)
- [ ] Aggiorna keywords
- [ ] Aggiorna authors e creator
- [ ] Aggiorna Open Graph tags
- [ ] Aggiorna Twitter Card
- [ ] Aggiorna Google verification code

### 4. Manifest PWA
Modifica `public/manifest.json`:
- [ ] Aggiorna `name` e `short_name`
- [ ] Aggiorna `description`
- [ ] Aggiorna `theme_color` e `background_color`
- [ ] Aggiungi le icone PWA (192x192 e 512x512)

### 5. Favicon e Icone
- [ ] Sostituisci `public/favicon.ico`
- [ ] Aggiungi `public/favicon-16x16.png`
- [ ] Aggiungi `public/apple-touch-icon.png`
- [ ] Aggiungi `public/icon-192.png`
- [ ] Aggiungi `public/icon-512.png`
- [ ] Aggiungi `public/og-image.jpg` (1200x630)
- [ ] Aggiungi `public/twitter-image.jpg` (1200x675)

### 6. Componenti
Modifica i componenti in `src/components/`:
- [ ] **Header.jsx**: Aggiorna logo e menu di navigazione
- [ ] **Footer.jsx**: Aggiorna informazioni azienda e link
- [ ] Personalizza altri componenti se necessario

### 7. Pagine
- [ ] **Homepage** (`src/app/page.js`): Personalizza contenuto e features
- [ ] **About** (`src/app/about/page.js`): Aggiungi storia e valori aziendali
- [ ] **Contact** (`src/app/contact/page.js`): Configura form o connetti API
- [ ] **Blog** (`src/app/blog/page.js`): Connetti a CMS o database

### 8. Sitemap
Modifica `src/app/sitemap.js`:
- [ ] Aggiungi tutte le pagine statiche del sito
- [ ] Configura `changeFrequency` e `priority` per ogni pagina
- [ ] Se hai contenuti dinamici, implementa logica per recuperarli

### 9. Robots.txt
Modifica `src/app/robots.js`:
- [ ] Verifica le directory da escludere (default: `/api/`, `/admin/`)
- [ ] Aggiungi altre regole se necessario

## 🎨 Personalizzazione Stile

### 10. Colori e Temi
Modifica `src/app/globals.css`:
- [ ] Personalizza `--background` e `--foreground` per tema chiaro
- [ ] Personalizza colori per tema scuro
- [ ] Aggiungi eventuali variabili CSS custom

### 11. Font
Se vuoi usare font diversi:
- [ ] Modifica import dei font in `src/app/layout.js`
- [ ] Aggiorna variabili CSS in `globals.css`

## 🔧 Configurazioni Avanzate

### 12. Next.js Config
Modifica `next.config.mjs`:
- [ ] Configura domini per `next/image` se usi immagini esterne
- [ ] Aggiungi redirect necessari
- [ ] Aggiungi rewrite se necessari
- [ ] Configura headers personalizzati se necessario

### 13. Analytics
Se usi Google Analytics:
- [ ] Aggiungi `NEXT_PUBLIC_GA_ID` in `.env.local`
- [ ] Importa `Analytics` component in `layout.js`
- [ ] Verifica che il tracking funzioni

### 14. Database/CMS
Se usi un database o CMS:
- [ ] Aggiungi variabili di connessione in `.env.local`
- [ ] Crea utility functions in `src/utils/`
- [ ] Implementa API routes se necessario

## 📦 Package.json

### 15. Info Progetto
Modifica `package.json`:
- [ ] Aggiorna `name`
- [ ] Aggiorna `version`
- [ ] Aggiungi `author`
- [ ] Aggiungi `description`
- [ ] Aggiungi `repository`
- [ ] Aggiungi `homepage`

## ✅ Testing e Deploy

### 16. Test Locali
- [ ] Esegui `npm install`
- [ ] Esegui `npm run dev` e verifica tutto funzioni
- [ ] Testa tutte le pagine
- [ ] Verifica responsive design su vari dispositivi
- [ ] Testa tema chiaro e scuro
- [ ] Esegui `npm run build` per verificare build di produzione
- [ ] Esegui `npm run lint` per verificare errori

### 17. SEO Testing
- [ ] Verifica metadata con [Meta Tags](https://metatags.io/)
- [ ] Testa Open Graph con [Open Graph Debugger](https://www.opengraph.xyz/)
- [ ] Testa Twitter Card con [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Verifica sitemap visitando `/sitemap.xml`
- [ ] Verifica robots.txt visitando `/robots.txt`
- [ ] Testa con [Google Rich Results Test](https://search.google.com/test/rich-results)

### 18. Performance Testing
- [ ] Testa con [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Testa con [GTmetrix](https://gtmetrix.com/)
- [ ] Verifica Core Web Vitals
- [ ] Ottimizza immagini se necessario

### 19. Accessibility Testing
- [ ] Testa con [WAVE](https://wave.webaim.org/)
- [ ] Verifica contrasto colori
- [ ] Testa navigazione da tastiera
- [ ] Verifica con screen reader

### 20. Deploy
- [ ] Push su GitHub/GitLab
- [ ] Configura hosting (Vercel raccomandato)
- [ ] Configura variabili d'ambiente su hosting
- [ ] Verifica domain e DNS
- [ ] Configura SSL certificate
- [ ] Test su produzione

## 🚀 Post-Deploy

### 21. Search Engines
- [ ] Submit sitemap a [Google Search Console](https://search.google.com/search-console)
- [ ] Submit sitemap a [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Verifica proprietà del sito
- [ ] Monitora indexing

### 22. Monitoring
- [ ] Configura Google Analytics
- [ ] Configura error tracking (es. Sentry)
- [ ] Monitora performance
- [ ] Monitora uptime

## 📝 Note Finali

- Mantieni aggiornate le dipendenze: `npm update`
- Segui le best practices di sicurezza
- Mantieni il codice pulito e commentato
- Documenta modifiche importanti nel README

---

**Fatto? Complimenti! Il tuo sito è pronto! 🎉**
