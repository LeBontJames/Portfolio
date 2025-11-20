'use client';

import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const logoRef = useRef(null);
  const mobileLogoRef = useRef(null);

  // Array di parole/frasi da ciclare
  const words = ['Benvenuto...', 'nome:Nicola', 'età:26', 'Luogo:Brescia','Wp:+393664070376'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingDuration = currentWord.length * 100; // 0.1s per lettera
    const blinkDuration = 500; // 0.5 secondi di lampeggio
    const deletingDuration = currentWord.length * 50; // 0.05s per lettera (cancellazione)
    const pauseDuration = 200; // 0.2s pausa
    const initialDelay = isFirstRender ? 1500 : 0; // 1.5s delay solo al primo render
    const totalDuration = typingDuration + blinkDuration + deletingDuration + pauseDuration;

    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      setAnimationKey((prev) => prev + 1);
      if (isFirstRender) setIsFirstRender(false);
    }, totalDuration + initialDelay);

    return () => clearInterval(timer);
  }, [currentWordIndex]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    closeMobileMenu();
    
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <nav style={{
        background: scrolled ? 'rgba(15, 15, 35, 0.95)' : 'rgba(15, 15, 35, 0.15)',
        boxShadow: scrolled ? '0 0 30px rgba(0, 255, 255, 0.2)' : 'none'
      }}>
        <div className="nav-container">
          <a href="#top" className="logo" onClick={(e) => handleLinkClick(e, '#top')} key={animationKey} ref={logoRef} style={{
            '--word-length': words[currentWordIndex].length,
            '--cursor-start': `${(isFirstRender ? 1.5 : 0) + words[currentWordIndex].length * 0.1}s`
          }}>
            {words[currentWordIndex].split('').map((char, index) => {
              const initialDelay = isFirstRender ? 1.5 : 0;
              const typingDelay = initialDelay + index * 0.1;
              const deleteDelay = initialDelay + words[currentWordIndex].length * 0.1 + 0.5 + (words[currentWordIndex].length - index - 1) * 0.05;
              return (
                <span key={index} style={{
                  animationDelay: `${typingDelay}s, ${deleteDelay}s`
                }}>{char}</span>
              );
            })}
          </a>
          <ul className="nav-links">
            
            <li><a href="#stats" onClick={(e) => handleLinkClick(e, '#stats')}>Statistiche</a></li>
            <li><a href="#features" onClick={(e) => handleLinkClick(e, '#features')}>Su di me</a></li>
          </ul>
          
          <button 
            className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          {/* Logo rimosso */}
        </div>
        
        <nav className="mobile-menu-nav">
          <ul>
            
            <li><a href="#stats" onClick={(e) => handleLinkClick(e, '#stats')}>Statistiche</a></li>
            <li><a href="#features" onClick={(e) => handleLinkClick(e, '#features')}>Su di me</a></li>
            
          </ul>
        </nav>
      </div>
    </>
  );
}
