'use client';

import { useState } from 'react';

export default function Hero() {
  const [showContactIcons, setShowContactIcons] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const scrollToSection = (sectionId) => {
    // Disable scroll snap temporarily
    document.documentElement.style.scrollSnapType = 'none';
    document.body.style.scrollSnapType = 'none';
    
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      setTimeout(() => {
        document.documentElement.style.scrollSnapType = 'y mandatory';
        document.body.style.scrollSnapType = 'y mandatory';
      }, 1000);
    }
  };

  const toggleContactIcons = () => {
    if (showContactIcons) {
      // Trigger closing animation
      setIsClosing(true);
      setTimeout(() => {
        setShowContactIcons(false);
        setIsClosing(false);
      }, 300); // Match animation duration
    } else {
      setShowContactIcons(true);
      // Auto-hide after 2 seconds
      setTimeout(() => {
        setIsClosing(true);
        setTimeout(() => {
          setShowContactIcons(false);
          setIsClosing(false);
        }, 300); // Match animation duration
      }, 2000); // Wait 2 seconds before closing
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <p className="hero-nome">
           Bontempi Nicola
        </p>
        <h1 className="hero-title" style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}>
          <span className="hero-nexus text-focus-in" style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}>SVILUPPATORE</span>
          <span className="hero-flow text-focus-in" style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}>WEB</span>
        </h1>
        <p className="hero-subtitle">
          
              Professionalità è la parola chiave che mi contraddistingue.
        </p>
        <div className="hero-buttons">
          <button 
            className="btn-secondary slide-in-right" 
            onClick={toggleContactIcons}
            type="button"
          >
            Contattami
          </button>
          <button 
            className="btn-secondary slide-in-right-delayed" 
            onClick={() => scrollToSection('#features')}
            type="button"
          >
            Su di me
          </button>
        </div>
        
        <div className="contact-icons-wrapper">
          {showContactIcons && (
            <div className={`contact-icons ${isClosing ? 'closing' : ''}`}>
              
              <a href="#" className="contact-icon" aria-label="WhatsApp" onClick={(e) => e.preventDefault()} style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}>
                <img src="/icons/whatsapp.svg" alt="WhatsApp" style={{ width: '48px', height: '48px' }} />
              </a>
              <a href="#" className="contact-icon" aria-label="Email" onClick={(e) => e.preventDefault()} style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}>
                <img src="/icons/email.svg" alt="Email" style={{ width: '48px', height: '48px' }} />
              </a>
              <a href="#" className="contact-icon" aria-label="Call" onClick={(e) => e.preventDefault()} style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}>
                <img src="/icons/call.svg" alt="Call" style={{ width: '48px', height: '48px' }} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
