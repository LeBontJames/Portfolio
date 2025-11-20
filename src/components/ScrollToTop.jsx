'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use Intersection Observer to detect when hero section is out of view
    const heroSection = document.querySelector('.hero');
    
    if (!heroSection) {
      // Fallback to scroll listener if hero not found
      const handleScroll = () => {
        setIsVisible(window.scrollY > 100);
      };
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show button when hero is not intersecting (not visible)
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    observer.observe(heroSection);

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  const scrollToTop = () => {
    // Disable scroll snap temporarily
    document.documentElement.style.scrollSnapType = 'none';
    document.body.style.scrollSnapType = 'none';

    // Scroll to the hero section
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    // Re-enable scroll snap
    setTimeout(() => {
      document.documentElement.style.scrollSnapType = 'y mandatory';
      document.body.style.scrollSnapType = 'y mandatory';
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top"
      aria-label="Scroll to top"
      style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
}
