# 🚀 Quick Start Guide - Template NexusFlow Next.js

## Avvio Rapido

```bash
# 1. Installa le dipendenze
npm install

# 2. Avvia il server di sviluppo
npm run dev

# 3. Apri il browser
# http://localhost:3000 (o 3001 se 3000 è occupato)
```

## 🎨 Personalizzazione Rapida

### Cambiare i Colori

Apri `src/app/globals.css` e modifica le variabili CSS:

```css
:root {
  --primary-cyan: #00ffff;      /* Cambia cyan */
  --primary-purple: #7c3aed;    /* Cambia purple */
  --primary-pink: #ff00ff;      /* Cambia pink */
  --primary-orange: #f97316;    /* Cambia orange */
}
```

### Modificare il Titolo

Apri `src/components/Hero.jsx`:

```jsx
<h1 className="hero-title">
  <span className="hero-nexus">TUO</span>
  <span className="hero-flow">BRAND</span>
</h1>
```

### Modificare le Features

Apri `src/components/Features.jsx` e modifica l'array `features`:

```jsx
const features = [
  {
    icon: '⚡',
    title: 'Tua Feature',
    description: 'Tua descrizione...'
  },
  // Aggiungi più features...
];
```

### Modificare i Prezzi

Apri `src/components/Pricing.jsx` e modifica l'array `plans`.

### Modificare SEO

Apri `src/app/layout.js` e modifica l'oggetto `metadata`.

## 📱 Testare su Mobile

```bash
# Il tuo IP locale sarà mostrato nel terminale
# Esempio: http://192.168.1.28:3001
# Aprilo sul tuo smartphone nella stessa rete WiFi
```

## 🏗️ Build per Produzione

```bash
# Crea la build ottimizzata
npm run build

# Avvia il server di produzione
npm start
```

## 🚀 Deploy su Vercel

```bash
# Installa Vercel CLI
npm i -g vercel

# Deploy
vercel

# O connetti il repo GitHub su vercel.com
```

## 📝 Struttura Sezioni

La homepage è divisa in 5 sezioni:

1. **Hero** - Titolo principale e CTA
2. **Stats** - Statistiche animate
3. **Features** - Griglia di funzionalità
4. **Pricing** - Piani tariffari
5. **Contact** - Form contatti

Ogni sezione è un componente separato in `src/components/`.

## 🎯 Tips Utili

- **Disabilitare effetti su mobile**: Modifica `src/components/BackgroundEffects.jsx`
- **Cambiare font**: Modifica l'import in `src/app/layout.js`
- **Aggiungere pagine**: Crea nuove cartelle in `src/app/`
- **Smooth scroll**: Già abilitato per tutti i link `#anchor`

## 🐛 Problemi Comuni

### Porta già in uso
```bash
# Il server userà automaticamente la porta successiva (3001, 3002, etc.)
```

### Effetti troppo pesanti su mobile
```css
/* Modifica i media queries in globals.css */
@media (max-width: 768px) {
  .matrix-rain { display: none; }
  .particles { opacity: 0.3; }
}
```

### Form non funziona
```jsx
// Il form è client-side only. Per inviare email:
// - Usa servizi come Formspree, EmailJS, SendGrid
// - O crea API route in src/app/api/
```

## 📚 Risorse

- [Documentazione Next.js](https://nextjs.org/docs)
- [Template originale](https://templatemo.com/tm-594-nexus-flow)
- [Guida completa](./TEMPLATE-README.md)

## ⚡ Performance Tips

1. **Immagini**: Usa `next/image` per ottimizzazione automatica
2. **Fonts**: JetBrains Mono è già ottimizzato con `font-display: swap`
3. **Analytics**: Aggiungi solo dopo il deploy
4. **Lazy Loading**: Componenti già ottimizzati

---

**Happy coding! 🎉**
