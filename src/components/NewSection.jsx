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
        <img src="/icons/wordpress.png" alt="Call" width={64} height={64} />
      </div>
      <div className={`text-item ${isVisible ? 'animate' : ''}`}>HTML</div>
      <div className={`text-item ${isVisible ? 'animate' : ''}`}>JavaScript</div>
      <div className={`text-item ${isVisible ? 'animate' : ''}`}>React</div>
      <div className={`text-item ${isVisible ? 'animate' : ''}`}>WordPress</div>
    </section>
  );
};

export default NewSection;
