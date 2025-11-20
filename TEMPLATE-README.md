# NexusFlow - Template Cyberpunk per Next.js

## 📋 Descrizione

Questo progetto integra completamente il template HTML/CSS/JS **NexusFlow** (TemplateMo 594) in un'applicazione Next.js ottimizzata per SEO. Il template presenta un design cyberpunk futuristico con effetti visivi avanzati come:

- Effetto Matrix Rain
- Particelle fluttuanti
- Griglie animate
- Orb luminosi
- Scanlines e noise overlay
- Animazioni fluide al scroll

## 🚀 Componenti Creati

### Componenti Principali

1. **`BackgroundEffects.jsx`** - Gestisce tutti gli effetti visivi di sfondo (Matrix rain, particelle, data streams, orb, griglie)
2. **`Navigation.jsx`** - Barra di navigazione responsive con menu mobile
3. **`Hero.jsx`** - Sezione hero con titolo animato
4. **`Stats.jsx`** - Sezione statistiche con contatori animati
5. **`Features.jsx`** - Griglia di funzionalità con card
6. **`Pricing.jsx`** - Piani di pricing con card
7. **`Contact.jsx`** - Form di contatto con validazione
8. **`CyberFooter.jsx`** - Footer del sito
9. **`ScrollAnimations.jsx`** - Gestisce le animazioni al scroll

### Struttura File

```
src/
├── app/
│   ├── globals.css         (Stili dal template NexusFlow)
│   ├── layout.js           (Layout aggiornato con Navigation e Footer)
│   └── page.js             (Homepage con tutti i componenti)
└── components/
    ├── BackgroundEffects.jsx
    ├── Navigation.jsx
    ├── Hero.jsx
    ├── Stats.jsx
    ├── Features.jsx
    ├── Pricing.jsx
    ├── Contact.jsx
    ├── CyberFooter.jsx
    └── ScrollAnimations.jsx
```

## 🎨 Caratteristiche del Design

- **Palette Colori**: Cyan (#00ffff), Purple (#7c3aed), Pink (#ff00ff), Orange (#f97316)
- **Font**: JetBrains Mono (monospace)
- **Effetti**: Animazioni CSS, gradients, clip-path, backdrop-filter
- **Responsive**: Mobile-first con menu hamburger animato
- **Performance**: Ottimizzazioni per mobile (riduzione effetti)
- **Accessibilità**: Supporto prefers-reduced-motion

## 🛠️ Installazione e Avvio

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia server di produzione
npm start
```

Il sito sarà disponibile su `http://localhost:3000` (o porta alternativa se occupata)

## 📝 Personalizzazione

### Modificare il Contenuto

1. **Hero Section**: Modifica `src/components/Hero.jsx`
2. **Statistiche**: Modifica i numeri in `src/components/Stats.jsx`
3. **Features**: Aggiungi/modifica le features in `src/components/Features.jsx`
4. **Prezzi**: Modifica i piani in `src/components/Pricing.jsx`

### Modificare gli Stili

Tutti gli stili sono in `src/app/globals.css`. Le variabili CSS principali sono definite in `:root`:

```css
:root {
  --primary-cyan: #00ffff;
  --primary-purple: #7c3aed;
  --primary-pink: #ff00ff;
  --primary-orange: #f97316;
  --darker-bg: #0f051a;
  /* ... */
}
```

### SEO

I metadata SEO sono configurati in `src/app/layout.js`. Personalizza:
- Titolo e descrizione
- Keywords
- Open Graph tags
- Twitter Card
- Structured Data (JSON-LD)

## 📱 Responsive Design

Il template è completamente responsive con breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Il menu mobile si attiva automaticamente su schermi < 768px.

## ⚡ Ottimizzazioni Performance

- **Lazy Loading**: Componenti caricati on-demand
- **Animazioni Condizionali**: Ridotte su mobile
- **Throttling**: Eventi mouse ottimizzati
- **Cleanup**: Rimozione listener al unmount

## 🎯 Funzionalità Interattive

1. **Mouse Tracking**: Gli orb seguono il cursore
2. **Scroll Animations**: Fade-in al scroll
3. **Counter Animation**: Numeri che si animano al raggiungimento della sezione
4. **Form Validation**: Validazione client-side del form contatti
5. **Smooth Scroll**: Navigazione fluida tra sezioni

## 📦 Dipendenze

- Next.js 16.0.3
- React 19
- Google Fonts (JetBrains Mono)

## 🔗 Credits

- Template originale: [TemplateMo 594 - NexusFlow](https://templatemo.com/tm-594-nexus-flow)
- Framework: Next.js
- Integrazione: Completamente convertito in React/Next.js

## 📄 Licenza

Questo progetto utilizza il template NexusFlow di TemplateMo. Controlla la licenza originale sul sito TemplateMo.

---

**Nota**: Questo è un template completamente funzionale e pronto per essere personalizzato per i tuoi progetti web!
