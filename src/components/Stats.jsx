'use client';

import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const [countersStarted, setCountersStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (!countersStarted) {
              setCountersStarted(true);
              animateStats();
            }
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [countersStarted]);

  const animationInterval = 6000; // Intervallo configurabile per ripetere l'animazione

  useEffect(() => {
    if (isVisible ) {
      intervalRef.current = setInterval(() => {
        animateStats();
      }, animationInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible]); // Rimuovo animationInterval dalle dipendenze per evitare cambiamenti dinamici

  const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach((stat) => {
      const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
      let count = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          clearInterval(timer);
          count = target;
        }
        const suffix = stat.textContent.replace(/[\d]/g, '');
        stat.textContent = Math.floor(count) + suffix;
      }, 20);
    });
  };

  return (
    <section className="stats fade-up snap-center" id="stats" ref={sectionRef}>
      <div className="stats-container">
        <div className="stats-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="stat-item">
            <span className="stat-number">99%</span>
            <span className="stat-label">Clienti Soddisfatti</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">12 h</span>
            <span className="stat-label">Tempo di risposta</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">180+</span>
            <span className="stat-label">Paesi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
