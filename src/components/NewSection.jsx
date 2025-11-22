import React, { useEffect, useRef, useState } from 'react';
import "./new-section.css";

const NewSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setAnimate(false); // Reset animation when not visible
        }
      },
      { threshold: 0.7 }
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

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 500); // Delay of 500ms to wait for snap to settle
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="new-section-grid">
      <div className={`grid-item ${animate ? 'animate' : ''}`}>
        <img src="/icons/html.png" alt="Call" width={64} height={64} />
      </div>
      <div className={`grid-item ${animate ? 'animate' : ''}`}>
        <img src="/icons/javascript.png" alt="Email" width={64} height={64} />
      </div>
      <div className={`grid-item ${animate ? 'animate' : ''}`}>
        <img src="/icons/react.png" alt="Whatsapp" width={64} height={64} />
      </div>
      <div className={`grid-item ${animate ? 'animate' : ''}`}>
        <img src="/icons/wordpress.png" alt="Call" width={64} height={64} />
      </div>
      <div className={`text-item ${animate ? 'animate' : ''}`}>HTML</div>
      <div className={`text-item ${animate ? 'animate' : ''}`}>JAVASCRIPT</div>
      <div className={`text-item ${animate ? 'animate' : ''}`}>REACT</div>
      <div className={`text-item ${animate ? 'animate' : ''}`}>WORDPRESS</div>
    </section>
  );
};

export default NewSection;
