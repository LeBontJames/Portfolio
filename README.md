# Next.js SEO-Optimized Template

Template professionale per creare siti web SEO-friendly con Next.js 16, React 19 e Tailwind CSS 4.

## 🚀 Caratteristiche

- ✅ **SEO Ottimizzato**: Metadata completi, sitemap dinamica, robots.txt
- ✅ **Performance**: Image optimization, compression, lazy loading
- ✅ **PWA Ready**: Manifest.json configurato
- ✅ **Responsive**: Design mobile-first con Tailwind CSS
- ✅ **Componenti Riutilizzabili**: Header, Footer, Button, Container, Section
- ✅ **Dark Mode**: Supporto nativo per tema scuro
- ✅ **TypeScript Ready**: Facilmente convertibile a TypeScript
- ✅ **Accessibility**: Componenti accessibili e semantici

## 📦 Stack Tecnologico

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)
- **Linting**: ESLint con configurazione Next.js

## 🛠️ Setup Iniziale

1. **Clona o usa questo template**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Configura le variabili d'ambiente**
   ```bash
   cp .env.example .env.local
   ```
   Modifica `.env.local` con i tuoi valori

4. **Personalizza il template**
   - Aggiorna `src/app/layout.js` con i tuoi metadata SEO
   - Modifica `src/components/Header.jsx` e `Footer.jsx` con il tuo brand
   - Personalizza i colori in `src/app/globals.css`
   - Aggiorna `public/manifest.json` con le info della tua app

5. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```
   Apri [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
portfolio/
├── public/                 # File statici
│   ├── robots.txt         # SEO: istruzioni per i crawler
│   └── manifest.json      # PWA configuration
├── src/
│   ├── app/               # App Router (Next.js 16)
│   │   ├── layout.js      # Layout principale + SEO metadata
│   │   ├── page.js        # Homepage
│   │   ├── sitemap.js     # Sitemap dinamica
│   │   ├── robots.js      # Robots.txt dinamico
│   │   └── globals.css    # Stili globali
│   ├── components/        # Componenti riutilizzabili
│   │   ├── Header.jsx     # Navigazione principale
│   │   ├── Footer.jsx     # Footer del sito
│   │   ├── Button.jsx     # Componente bottone
│   │   ├── Container.jsx  # Wrapper per layout
│   │   ├── Section.jsx    # Sezioni con spacing consistente
│   │   └── SEO.jsx        # Componente per metadata personalizzati
│   ├── utils/             # Utility functions
│   └── hooks/             # Custom React hooks
├── .env.example           # Template variabili d'ambiente
├── next.config.mjs        # Configurazione Next.js ottimizzata
├── tailwind.config.js     # Configurazione Tailwind CSS
└── package.json           # Dipendenze del progetto
```

## 🎨 Personalizzazione

### Metadata SEO

Modifica `src/app/layout.js` per aggiornare:
- Titolo del sito e template
- Descrizione e keywords
- Open Graph tags (social sharing)
- Twitter Card
- Favicon e icone

### Colori e Stili

Personalizza `src/app/globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

### Sitemap

Aggiungi le tue pagine in `src/app/sitemap.js`:
```javascript
return [
  {
    url: `${baseUrl}/your-page`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
];
```

### Componenti

Tutti i componenti in `src/components/` sono personalizzabili e riutilizzabili.

## 📄 Creazione di Nuove Pagine

1. Crea una nuova cartella in `src/app/`
2. Aggiungi un file `page.js`
3. Esporta i metadata personalizzati:

```javascript
// src/app/about/page.js
export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company',
};

export default function AboutPage() {
  return <div>About content</div>;
}
```

## 🔍 SEO Checklist

- ✅ Metadata completi in ogni pagina
- ✅ Sitemap.xml generata automaticamente
- ✅ Robots.txt configurato
- ✅ URL canonici
- ✅ Open Graph e Twitter Cards
- ✅ Alt text per tutte le immagini
- ✅ Struttura semantica HTML
- ✅ Performance ottimizzate (Core Web Vitals)
- ✅ Schema markup (da aggiungere se necessario)
- ✅ Google Analytics (configurare in .env.local)

## 🚀 Deploy

### Vercel (Raccomandato)

1. Push su GitHub
2. Importa su [Vercel](https://vercel.com)
3. Configura le variabili d'ambiente
4. Deploy automatico!

### Altro Hosting

```bash
npm run build
npm run start
```

## 📊 Performance

Questo template è ottimizzato per:
- Core Web Vitals
- Image optimization automatica (AVIF/WebP)
- Code splitting
- Tree shaking
- Compression

## 🔧 Scripts Disponibili

```bash
npm run dev      # Avvia development server
npm run build    # Build per produzione
npm run start    # Avvia production server
npm run lint     # Linting del codice
```

## 📝 Best Practices

1. **SEO**: Usa sempre metadata unici per ogni pagina
2. **Performance**: Ottimizza le immagini con Next.js Image
3. **Accessibilità**: Usa tag semantici e ARIA labels
4. **Mobile First**: Design responsive da mobile a desktop
5. **Git**: Commit frequenti con messaggi descrittivi

## 🤝 Contributi

Sentiti libero di modificare e migliorare questo template per i tuoi progetti!

## 📄 Licenza

Libero di usare per progetti personali e commerciali.

## 🆘 Supporto

Per problemi o domande:
- Controlla la [documentazione Next.js](https://nextjs.org/docs)
- Controlla la [documentazione Tailwind](https://tailwindcss.com/docs)

---

**Buon coding! 🚀**

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
