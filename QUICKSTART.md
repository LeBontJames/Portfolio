# 🚀 Quick Start Guide

Guida rapida per iniziare subito con il template.

## ⚡ Setup in 5 Minuti

### 1. Installa Dipendenze
```bash
npm install
```

### 2. Configura Ambiente
```bash
cp .env.example .env.local
```

Modifica `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://tuodominio.com
NEXT_PUBLIC_SITE_NAME=Il Tuo Sito
```

### 3. Personalizza Metadata
Apri `src/app/layout.js` e aggiorna:
- `title`
- `description`
- `keywords`
- `openGraph`
- `twitter`

### 4. Personalizza Configurazione
Apri `src/config/site.js` e aggiorna:
- Nome sito
- Link social
- Informazioni contatto

### 5. Avvia Server
```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000)

---

## 📝 Personalizzazioni Essenziali

### Header e Footer
- **Header**: `src/components/Header.jsx`
- **Footer**: `src/components/Footer.jsx`
- **Link navigazione**: `src/config/site.js` (NAV_LINKS)

### Favicon e Immagini
Sostituisci questi file in `public/`:
- `favicon.ico`
- `og-image.jpg` (1200x630px)
- `icon-192.png` e `icon-512.png` (per PWA)
- `apple-touch-icon.png`

### Colori
Apri `src/app/globals.css`:
```css
:root {
  --background: #ffffff;  /* Colore sfondo chiaro */
  --foreground: #171717;  /* Colore testo chiaro */
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;  /* Colore sfondo scuro */
    --foreground: #ededed;  /* Colore testo scuro */
  }
}
```

### Pagine
Modifica le pagine in `src/app/`:
- `page.js` - Homepage
- `about/page.js` - Chi siamo
- `blog/page.js` - Blog
- `contact/page.js` - Contatti

---

## 🔍 SEO Checklist Rapida

### Prima del Deploy
- [ ] Aggiorna metadata in `src/app/layout.js`
- [ ] Verifica `sitemap.js` con tutte le tue pagine
- [ ] Controlla `robots.js`
- [ ] Aggiungi immagini Open Graph
- [ ] Testa con: `npm run build`

### Dopo il Deploy
- [ ] Submit sitemap a Google Search Console
- [ ] Verifica metadata con [metatags.io](https://metatags.io/)
- [ ] Test performance con [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Verifica mobile-friendly

---

## 📦 Build e Deploy

### Build Locale
```bash
npm run build
npm run start
```

### Deploy su Vercel
```bash
# 1. Push su GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Importa su Vercel
# Vai su vercel.com e importa il repository
# Vercel rileverà automaticamente Next.js

# 3. Configura variabili d'ambiente su Vercel
# Dashboard > Settings > Environment Variables
```

### Deploy su Altri Hosting
```bash
npm run build
# Carica la cartella .next/ e node_modules/ sul server
# Avvia con: npm run start
```

---

## 🎨 Componenti Principali

### Button
```jsx
import Button from '@/components/Button';

<Button href="/contact">Contact</Button>
<Button variant="secondary">Click Me</Button>
```

### Layout
```jsx
import Container from '@/components/Container';
import Section from '@/components/Section';

<Section>
  <Container>
    {/* Contenuto con layout consistente */}
  </Container>
</Section>
```

### Hooks
```jsx
import { useMediaQuery, useScrollPosition } from '@/hooks';

const isMobile = useMediaQuery('(max-width: 768px)');
const scrollY = useScrollPosition();
```

---

## 📚 Documentazione Completa

Per guide dettagliate, consulta:
- **README.md** - Documentazione principale
- **SETUP-CHECKLIST.md** - Checklist completa setup
- **BEST-PRACTICES.md** - Best practices e convenzioni
- **COMPONENT-GUIDE.md** - Guida all'uso dei componenti

---

## 🆘 Comandi Utili

```bash
# Development
npm run dev          # Server di sviluppo

# Production
npm run build        # Build per produzione
npm run start        # Avvia server produzione

# Utility
npm run lint         # Verifica errori
```

---

## 🎯 Prossimi Passi

1. ✅ Personalizza metadata SEO
2. ✅ Aggiorna Header e Footer
3. ✅ Sostituisci immagini placeholder
4. ✅ Personalizza colori e stili
5. ✅ Crea le tue pagine
6. ✅ Deploy!

---

**Hai domande? Consulta la documentazione completa nel README! 📖**

Buon sviluppo! 🚀
