# 🌟 Best Practices per Template Next.js SEO

Guida alle best practices per mantenere il template ottimizzato e scalabile.

## 📁 Struttura del Progetto

### Organizzazione File
```
src/
├── app/              # Route pages (App Router)
├── components/       # Componenti riutilizzabili
├── config/          # Configurazioni globali
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
├── lib/             # Librerie e integrazioni esterne
├── styles/          # Stili globali (se non usi solo Tailwind)
└── types/           # TypeScript types (se usi TS)
```

### Naming Conventions
- **Componenti**: PascalCase (`Button.jsx`, `Header.jsx`)
- **Utilities**: camelCase (`formatDate.js`, `api.js`)
- **Pages**: lowercase (`about/page.js`)
- **Costanti**: UPPER_SNAKE_CASE (`SITE_CONFIG`)

## 🎯 SEO Best Practices

### 1. Metadata Unici per Ogni Pagina
```javascript
// ✅ Corretto
export const metadata = {
  title: 'Titolo Specifico Pagina',
  description: 'Descrizione unica per questa pagina (150-160 caratteri)',
};

// ❌ Evitare
// Usare lo stesso metadata per tutte le pagine
```

### 2. Struttura URL Pulita
```javascript
// ✅ Corretto
/about
/blog/my-article-title
/products/category/item-name

// ❌ Evitare
/page?id=123
/article.php?id=456
```

### 3. Heading Hierarchy
```jsx
// ✅ Corretto
<h1>Titolo Principale (solo uno per pagina)</h1>
<h2>Sezione</h2>
<h3>Sottosezione</h3>

// ❌ Evitare
<h1>Primo H1</h1>
<h1>Secondo H1</h1> // Mai più di un H1
<h4>Testo</h4> // Saltare livelli
```

### 4. Alt Text per Immagini
```jsx
// ✅ Corretto
<Image 
  src="/image.jpg" 
  alt="Descrizione dettagliata dell'immagine"
  width={800}
  height={600}
/>

// ❌ Evitare
<Image src="/image.jpg" alt="" /> // Alt vuoto
<Image src="/image.jpg" alt="image" /> // Alt generico
```

### 5. Link Interni
```jsx
// ✅ Corretto - Usa next/link
import Link from 'next/link';
<Link href="/about">About</Link>

// ❌ Evitare
<a href="/about">About</a> // Non sfrutta il prefetching
```

### 6. Schema Markup
```jsx
// Aggiungi structured data per rich snippets
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Titolo Articolo',
      // ... altri dati
    })
  }}
/>
```

## ⚡ Performance Best Practices

### 1. Image Optimization
```jsx
// ✅ Usa sempre next/image
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // Solo per immagini above-the-fold
  placeholder="blur" // Migliora perceived performance
/>
```

### 2. Lazy Loading
```jsx
// ✅ Components pesanti con dynamic import
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <Loading />,
  ssr: false, // Se non serve SSR
});
```

### 3. Font Optimization
```javascript
// ✅ Usa next/font
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Importante per performance
});
```

### 4. Bundle Size
```bash
# Analizza bundle size
npm run build
npx @next/bundle-analyzer
```

## ♿ Accessibility Best Practices

### 1. Semantic HTML
```jsx
// ✅ Corretto
<header>
  <nav>
    <ul>
      <li><Link href="/">Home</Link></li>
    </ul>
  </nav>
</header>
<main>
  <article>Content</article>
</main>
<footer>Footer</footer>

// ❌ Evitare
<div class="header">
  <div class="nav">...</div>
</div>
```

### 2. ARIA Labels
```jsx
// ✅ Usa ARIA quando necessario
<button aria-label="Close menu">
  <CloseIcon />
</button>

<nav aria-label="Main navigation">
  {/* navigation links */}
</nav>
```

### 3. Focus Management
```jsx
// ✅ Assicurati che tutti gli elementi interattivi siano accessibili via tastiera
<button 
  className="..."
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Click me
</button>
```

### 4. Contrasto Colori
- Minimo 4.5:1 per testo normale
- Minimo 3:1 per testo large
- Usa tool come [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## 🔒 Security Best Practices

### 1. Environment Variables
```javascript
// ✅ Non committare .env.local
// .gitignore
.env*.local
.env

// ✅ Usa NEXT_PUBLIC_ solo per variabili client-side
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=secret123 // Solo server-side
```

### 2. Content Security Policy
```javascript
// next.config.mjs
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline';"
        }
      ]
    }
  ];
}
```

### 3. Input Validation
```javascript
// ✅ Valida sempre input utente
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// In componente form
if (!isValidEmail(email)) {
  setError('Email non valida');
  return;
}
```

## 📱 Mobile-First Approach

### 1. Responsive Design
```jsx
// ✅ Usa Tailwind responsive classes
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

// ✅ Mobile-first CSS
@media (min-width: 768px) {
  /* Tablet styles */
}
@media (min-width: 1024px) {
  /* Desktop styles */
}
```

### 2. Touch Targets
```jsx
// ✅ Minimo 44x44px per target touch
<button className="min-h-[44px] min-w-[44px] p-3">
  Tap me
</button>
```

## 🧪 Testing Best Practices

### 1. Componenti
```bash
# Setup testing
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

### 2. E2E Testing
```bash
# Playwright per E2E
npm install --save-dev @playwright/test
```

### 3. Lighthouse CI
```bash
# Automatizza test performance
npm install --save-dev @lhci/cli
```

## 📊 Analytics e Monitoring

### 1. Google Analytics
```javascript
// Traccia eventi personalizzati
export function trackEvent(action, category, label, value) {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}
```

### 2. Error Tracking
```javascript
// Integra Sentry o simili
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
});
```

## 🔄 Git Workflow

### 1. Commit Messages
```bash
# ✅ Commit messages chiari
feat: add contact form validation
fix: resolve mobile menu bug
docs: update README with setup instructions
style: format code with prettier
refactor: improve SEO metadata structure
```

### 2. Branching Strategy
```bash
main          # Production
└── develop   # Development
    ├── feature/new-component
    ├── fix/bug-name
    └── hotfix/urgent-fix
```

## 📝 Documentazione

### 1. Commenta il Codice
```javascript
/**
 * Genera structured data per articolo
 * @param {string} title - Titolo articolo
 * @param {string} description - Descrizione
 * @param {Date} publishDate - Data pubblicazione
 * @returns {Object} Schema.org structured data
 */
export function generateArticleSchema(title, description, publishDate) {
  // ...
}
```

### 2. README Aggiornato
- Setup instructions
- Environment variables
- API documentation
- Deployment guide

## 🚀 Deployment Checklist

- [ ] Test build locale (`npm run build`)
- [ ] Verifica errori lint (`npm run lint`)
- [ ] Test su vari browser
- [ ] Verifica mobile responsive
- [ ] Test performance con Lighthouse
- [ ] Verifica metadata SEO
- [ ] Configura environment variables
- [ ] Setup monitoring e analytics
- [ ] Verifica SSL certificate
- [ ] Test funzionalità su production

---

Segui queste best practices per mantenere il progetto di alta qualità! 🌟
