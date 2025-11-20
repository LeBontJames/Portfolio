# 📘 Component Usage Guide

Guida all'utilizzo dei componenti inclusi nel template.

## 🧩 Componenti UI

### Button

Componente bottone versatile con varie varianti e dimensioni.

```jsx
import Button from '@/components/Button';

// Primary button (default)
<Button href="/contact">Contact Us</Button>

// Secondary button
<Button variant="secondary" onClick={handleClick}>
  Click Me
</Button>

// Outline button
<Button variant="outline" size="lg">
  Large Outline
</Button>

// Ghost button
<Button variant="ghost" size="sm">
  Small Ghost
</Button>

// As a form button
<Button type="submit" variant="primary">
  Submit Form
</Button>
```

**Props:**
- `href` (string): URL per navigazione (trasforma in Link)
- `variant` ('primary' | 'secondary' | 'outline' | 'ghost'): Stile del bottone
- `size` ('sm' | 'md' | 'lg'): Dimensione del bottone
- `className` (string): Classi CSS aggiuntive
- Tutti gli altri props standard di button/link

---

### Header

Componente navigazione principale con menu responsive.

```jsx
import Header from '@/components/Header';

<Header />
```

**Personalizzazione:**
- Modifica i link di navigazione in `src/config/site.js` (`NAV_LINKS`)
- Personalizza logo e stili nel file `Header.jsx`

---

### Footer

Componente footer con link e informazioni aziendali.

```jsx
import Footer from '@/components/Footer';

<Footer />
```

**Personalizzazione:**
- Modifica i link in `src/config/site.js` (`FOOTER_LINKS`)
- Aggiorna testo e layout nel file `Footer.jsx`

---

### Container

Wrapper per mantenere layout consistente con max-width e padding.

```jsx
import Container from '@/components/Container';

<Container>
  <h1>Contenuto centrato con padding</h1>
  <p>Il container ha max-width e padding responsive.</p>
</Container>

// Con classe custom
<Container className="bg-zinc-50">
  <p>Container con background</p>
</Container>
```

**Props:**
- `children` (ReactNode): Contenuto del container
- `className` (string): Classi CSS aggiuntive

---

### Section

Componente per sezioni con spacing verticale consistente.

```jsx
import Section from '@/components/Section';

<Section>
  <h2>Sezione Standard</h2>
  <p>Spacing verticale automatico</p>
</Section>

// Con ID per anchor link
<Section id="features">
  <h2>Features Section</h2>
</Section>

// Con background personalizzato
<Section className="bg-zinc-900 text-white">
  <h2>Dark Section</h2>
</Section>
```

**Props:**
- `children` (ReactNode): Contenuto della sezione
- `className` (string): Classi CSS aggiuntive
- `id` (string): ID per anchor links

---

### Loading

Componente per stati di caricamento.

```jsx
import Loading from '@/components/Loading';

// In un Suspense boundary
<Suspense fallback={<Loading />}>
  <AsyncComponent />
</Suspense>

// Direttamente in loading.js
export default function Loading() {
  return <Loading />;
}
```

---

### SEO

Componente per metadata dinamici (da usare con Pages Router).

```jsx
import SEO from '@/components/SEO';

<SEO
  title="Titolo Pagina"
  description="Descrizione pagina per SEO"
  image="/custom-og-image.jpg"
  url="/current-page"
  keywords={['keyword1', 'keyword2']}
/>
```

**Nota:** Con App Router usa `export const metadata` nelle pages invece.

---

### Analytics

Componente Google Analytics per tracking.

```jsx
import Analytics from '@/components/Analytics';

// In layout.js
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Analytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## 🎣 Custom Hooks

### useMediaQuery

Hook per media queries responsive.

```jsx
import { useMediaQuery } from '@/hooks';

function MyComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  return (
    <div>
      {isMobile && <MobileMenu />}
      {isDesktop && <DesktopMenu />}
    </div>
  );
}
```

---

### useWindowSize

Hook per ottenere dimensioni finestra.

```jsx
import { useWindowSize } from '@/hooks';

function MyComponent() {
  const { width, height } = useWindowSize();
  
  return (
    <div>
      Window size: {width} x {height}
    </div>
  );
}
```

---

### useScrollPosition

Hook per tracking posizione scroll.

```jsx
import { useScrollPosition } from '@/hooks';

function Header() {
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 50;
  
  return (
    <header className={isScrolled ? 'shadow-lg' : ''}>
      Navigation
    </header>
  );
}
```

---

### useIntersectionObserver

Hook per lazy loading e scroll animations.

```jsx
import { useIntersectionObserver } from '@/hooks';
import { useRef } from 'react';

function AnimatedSection() {
  const ref = useRef();
  const isVisible = useIntersectionObserver(ref, {
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <div 
      ref={ref}
      className={isVisible ? 'animate-fade-in' : 'opacity-0'}
    >
      Content animato quando visibile
    </div>
  );
}
```

---

### useLocalStorage

Hook per gestire localStorage con React state.

```jsx
import { useLocalStorage } from '@/hooks';

function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}
```

---

### useDebounce

Hook per debounce di valori (utile per search).

```jsx
import { useDebounce } from '@/hooks';
import { useState, useEffect } from 'react';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  
  useEffect(() => {
    // API call solo dopo 500ms dall'ultimo input
    if (debouncedSearch) {
      fetchResults(debouncedSearch);
    }
  }, [debouncedSearch]);
  
  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

---

### useClickOutside

Hook per rilevare click fuori da un elemento.

```jsx
import { useClickOutside } from '@/hooks';
import { useRef, useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  
  useClickOutside(dropdownRef, () => setIsOpen(false));
  
  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>
      {isOpen && <div>Dropdown content</div>}
    </div>
  );
}
```

---

## 🛠️ Utility Functions

### helpers.js

```jsx
import {
  formatDate,
  formatCurrency,
  slugify,
  truncate,
  isValidEmail,
  capitalize
} from '@/utils/helpers';

// Format date
formatDate('2025-11-14'); // "14 novembre 2025"
formatDate('2025-11-14', 'en-US'); // "November 14, 2025"

// Format currency
formatCurrency(1234.56); // "€1.234,56"
formatCurrency(1234.56, 'USD', 'en-US'); // "$1,234.56"

// Create URL slug
slugify('Questo è un Titolo!'); // "questo-e-un-titolo"

// Truncate string
truncate('Long text here...', 20); // "Long text here..."

// Validate email
isValidEmail('user@example.com'); // true
isValidEmail('invalid'); // false

// Capitalize
capitalize('hello world'); // "Hello world"
```

---

### seo.js

```jsx
import { generateJSONLD, schemas } from '@/utils/seo';

// Generate Organization schema
const orgSchema = schemas.organization(
  'Your Company',
  'https://yourdomain.com',
  'https://yourdomain.com/logo.png',
  ['https://twitter.com/yourcompany']
);

// In component
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={generateJSONLD(orgSchema)}
/>

// Article schema
const articleSchema = schemas.article(
  'Article Title',
  'Article description',
  '/article-image.jpg',
  '2025-11-14',
  '2025-11-14',
  'Author Name',
  'https://yourdomain.com/blog/article'
);

// FAQ schema
const faqSchema = schemas.faq([
  {
    question: 'What is Next.js?',
    answer: 'Next.js is a React framework...'
  },
  // more FAQs
]);
```

---

### api.js

```jsx
import { get, post, put, del, fetchWithRetry } from '@/utils/api';

// GET request
const data = await get('/api/posts');

// POST request
const newPost = await post('/api/posts', {
  title: 'New Post',
  content: 'Content here...'
});

// PUT request
const updated = await put('/api/posts/1', {
  title: 'Updated Title'
});

// DELETE request
await del('/api/posts/1');

// Retry fetch with exponential backoff
const data = await fetchWithRetry('/api/unreliable', {}, 5);
```

---

## 📄 Page Examples

### Basic Page Structure

```jsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import Section from '@/components/Section';

// Metadata
export const metadata = {
  title: 'Page Title',
  description: 'Page description for SEO',
};

export default function MyPage() {
  return (
    <>
      <Header />
      
      <main>
        <Section>
          <Container>
            <h1>Page Title</h1>
            <p>Content here...</p>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
```

---

### Dynamic Page with Params

```jsx
// app/blog/[slug]/page.js
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  
  return (
    <>
      <Header />
      <main>
        <article>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
      <Footer />
    </>
  );
}
```

---

### Page with Client Components

```jsx
// app/contact/page.js
import Header from '@/components/Header';
import ContactForm from './ContactForm'; // Client component

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with us',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <h1>Contact Us</h1>
        <ContactForm />
      </main>
    </>
  );
}

// app/contact/ContactForm.jsx
'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <Button type="submit">Send</Button>
    </form>
  );
}
```

---

## 🎨 Styling Tips

### Tailwind Classes Comuni

```jsx
// Layout
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="flex flex-col md:flex-row items-center justify-between">

// Spacing
<div className="py-16 md:py-24"> // Section padding
<div className="space-y-4"> // Vertical spacing tra children
<div className="space-x-4"> // Horizontal spacing

// Typography
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
<p className="text-lg text-zinc-600 dark:text-zinc-400">

// Colors (tema chiaro/scuro)
<div className="bg-white dark:bg-zinc-950">
<p className="text-zinc-900 dark:text-zinc-50">

// Hover effects
<button className="transition-colors hover:bg-zinc-100">

// Responsive
<div className="hidden md:block"> // Nascosto su mobile
<div className="block md:hidden"> // Solo mobile
```

---

Usa questa guida come riferimento rapido per tutti i componenti e utilities del template! 🚀
