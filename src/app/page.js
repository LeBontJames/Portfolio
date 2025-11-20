'use client';

import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import BackgroundEffects from '@/components/BackgroundEffects';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <ScrollAnimations />
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Nicola Bontempi",
            "jobTitle": "Sviluppatore Web",
            "description": "Sviluppatore web professionista specializzato in Next.js, React e ottimizzazione SEO. Creo siti web moderni, veloci e personalizzati per portare visibilità e nuovi clienti alla tua attività online.",
            "url": "https://bontempinicola.com",
            "sameAs": [
              "https://github.com/nicolabontempi",
              "https://linkedin.com/in/nicolabontempi"
            ],
            "knowsAbout": ["Next.js", "React", "JavaScript", "SEO", "Web Development", "Frontend Development", "Responsive Design", "Web Performance", "Ottimizzazione Siti Web"],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Sviluppatore Web",
              "occupationLocation": {
                "@type": "Country",
                "name": "Italia"
              }
            }
          })
        }}
      />
      
      <Hero />
      <Stats />
      <Features />
    </>
  );
}
