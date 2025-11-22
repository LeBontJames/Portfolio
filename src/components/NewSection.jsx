import React, { useEffect, useRef, useState } from 'react';
import "./new-section.css";

const NewSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [scaleActive, setScaleActive] = useState(false);

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
      // Apply delay only on mobile devices
      if (window.innerWidth <= 768) {
        const timer = setTimeout(() => {
          setAnimate(true);
        }, 500); // Delay of 500ms to wait for snap to settle
        return () => clearTimeout(timer);
      } else {
        setAnimate(true); // Immediate animation on desktop
      }
    }
  }, [isVisible]);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setScaleActive(true);
      }, 2000); // Start scale animation 2s after entrance
      return () => clearTimeout(timer);
    } else {
      setScaleActive(false); // Reset scale when not animating
    }
  }, [animate]);

  return (
    <section ref={sectionRef} className="new-section-grid">
      <div className={`grid-item colonna-1 ${animate ? 'animate' : ''} ${scaleActive ? 'scale-active' : ''}`}>
        <img src="/icons/html.png" alt="Call" width={64} height={64} />
      </div>
      <div className={`grid-item colonna-2 ${animate ? 'animate' : ''} ${scaleActive ? 'scale-active' : ''}`}>
        <img src="/icons/javascript.png" alt="Email" width={64} height={64} />
      </div>
      <div className={`grid-item colonna-3 ${animate ? 'animate' : ''} ${scaleActive ? 'scale-active' : ''}`}>
        <img src="/icons/react.png" alt="Whatsapp" width={64} height={64} />
      </div>
      <div className={`grid-item colonna-4 ${animate ? 'animate' : ''} ${scaleActive ? 'scale-active' : ''}`}>
        <img src="/icons/wordpress.png" alt="Call" width={64} height={64} />
      </div>
      <div className={`text-item colonna-1 ${animate ? 'animate' : ''} ${scaleActive ? 'scale-active' : ''}`}>HTML</div>
      <div className={`text-item colonna-2 ${animate ? 'animate' : ''} ${scaleActive ? 'scale-active' : ''}`}>JAVASCRIPT</div>
      <div className={`text-item colonna-3 ${animate ? 'animate' : ''} ${scaleActive ? 'scale-active' : ''}`}>REACT</div>
      <div className={`text-item colonna-4 ${animate ? 'animate' : ''} ${scaleActive ? 'scale-active' : ''}`}>WORDPRESS</div>
    </section>
  );
};

export default NewSection;
