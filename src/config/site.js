// Site configuration constants
// Update these values for your project

export const SITE_CONFIG = {
  name: 'Nicola Bontempi - Sviluppatore Web',
  title: 'Nicola Bontempi | Sviluppatore Web Professionista',
  description: 'Sviluppatore web professionista specializzato in Next.js, React e ottimizzazione SEO. Creo siti web moderni e performanti per la tua attività.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://bontempinicola.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/nicolabontempi',
    github: 'https://github.com/nicolabontempi',
    linkedin: 'https://linkedin.com/in/nicolabontempi',
    email: 'mailto:info@bontempinicola.com',
  },
  creator: 'Nicola Bontempi',
  keywords: ['Nicola Bontempi', 'sviluppatore web', 'web developer Italia', 'Next.js', 'React', 'SEO', 'siti web personalizzati', 'web design', 'frontend developer', 'programmazione web', 'sviluppo applicazioni web'],
};

// Navigation links
export const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

// Footer links
export const FOOTER_LINKS = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
  social: [
    { label: 'Twitter', href: 'https://twitter.com/yourusername' },
    { label: 'GitHub', href: 'https://github.com/yourusername' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  ],
};

// Blog configuration
export const BLOG_CONFIG = {
  postsPerPage: 9,
  categories: ['Technology', 'Design', 'Business', 'Tutorial'],
};

// Contact configuration
export const CONTACT_CONFIG = {
  email: 'info@bontempinicola.com',
  phone: '',
  address: 'Italia',
};

// SEO defaults
export const SEO_DEFAULTS = {
  locale: 'it_IT',
  type: 'website',
  twitterHandle: '@yourtwitterhandle',
};

// Analytics
export const ANALYTICS_CONFIG = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID,
};
