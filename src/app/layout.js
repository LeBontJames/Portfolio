import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';
import CyberFooter from '@/components/CyberFooter';
import ScrollToTop from '@/components/ScrollToTop';

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// SEO Metadata Template - Customize for each project
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bontempinicola.com'),
  title: {
    default: 'Nicola Bontempi - Sviluppatore Web Professionista',
    template: '%s | Nicola Bontempi',
  },
  description: 'Nicola Bontempi - Sviluppatore Web professionista. Creo siti web moderni e performanti con Next.js e React. Servizi: sviluppo web personalizzato, ottimizzazione SEO, design responsive. Disponibile 24/7, 5 giorni su 5.',
  keywords: ['Nicola Bontempi', 'sviluppatore web Italia', 'web developer professionista', 'Next.js developer', 'React specialist', 'siti web personalizzati', 'ottimizzazione SEO', 'web design responsive', 'sviluppo frontend', 'programmazione web', 'portfolio sviluppatore', 'web developer italiano'],
  authors: [{ name: 'Nicola Bontempi', url: 'https://bontempinicola.com' }],
  creator: 'Nicola Bontempi',
  publisher: 'Nicola Bontempi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://bontempinicola.com',
    siteName: 'Nicola Bontempi Portfolio',
    title: 'Nicola Bontempi - Sviluppatore Web Professionista',
    description: 'Sviluppatore Web professionista specializzato in Next.js e React. Creo siti web moderni, veloci e ottimizzati SEO. Professionalità e competenza al tuo servizio.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nicola Bontempi - Sviluppatore Web Professionista',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicola Bontempi - Sviluppatore Web Professionista',
    description: 'Sviluppatore Web professionista | Next.js & React | Siti web personalizzati | Ottimizzazione SEO | Disponibile 24/7',
    creator: '@nicolabontempi',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  verification: {
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://bontempinicola.com'} />
      </head>
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Navigation />
        <main>
          {children}
        </main>
            {/* <CyberFooter /> Removed as per patch request */}
        <ScrollToTop />
      </body>
    </html>
  );
}
