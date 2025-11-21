import React, { useEffect, useRef, useState } from 'react';
import "./new-section.css";

const NewSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="new-section-grid">
      <div className={`grid-item ${isVisible ? 'animate' : ''}`}>
        <img src="/icons/html.png" alt="Call" width={64} height={64} />
      </div>
      <div className={`grid-item ${isVisible ? 'animate' : ''}`}>
        <img src="/icons/javascript.png" alt="Email" width={64} height={64} />
      </div>
      <div className={`grid-item ${isVisible ? 'animate' : ''}`}>
        <img src="/icons/react.png" alt="Whatsapp" width={64} height={64} />
      </div>
      <div className={`grid-item ${isVisible ? 'animate' : ''}`}>
        <img src="/icons/php.png" alt="Call" width={64} height={64} />
      </div>
      <div className="text-item">Testo 1</div>
      <div className="text-item">Testo 2</div>
      <div className="text-item">Testo 3</div>
      <div className="text-item">Testo 4</div>
    </section>
  );
};

export default NewSection;
