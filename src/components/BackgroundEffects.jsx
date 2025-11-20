'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundEffects() {
  const matrixRainRef = useRef(null);
  const particlesRef = useRef(null);
  const dataStreamsRef = useRef(null);

  useEffect(() => {
    // Generate Matrix Rain Effect
    const generateMatrixRain = () => {
      if (!matrixRainRef.current) return;
      
      const matrixRain = matrixRainRef.current;
      matrixRain.innerHTML = '';
      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

      const columns = window.innerWidth > 768 ? Math.floor(window.innerWidth / 20) : Math.floor(window.innerWidth / 40);

      for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * (window.innerWidth > 768 ? 20 : 40)}px`;
        column.style.animationDuration = `${Math.random() * 5 + (window.innerWidth > 768 ? 10 : 20)}s`;
        column.style.animationDelay = `${Math.random() * 5}s`;

        let text = '';
        const charCount = window.innerWidth > 768 ? Math.floor(Math.random() * 20 + 10) : Math.floor(Math.random() * 10 + 5);
        for (let j = 0; j < charCount; j++) {
          text += characters[Math.floor(Math.random() * characters.length)] + ' ';
        }
        column.textContent = text;
        matrixRain.appendChild(column);
      }
    };

    // Generate Floating Particles
    const generateParticles = () => {
      if (!particlesRef.current) return;
      
      const particlesContainer = particlesRef.current;
      particlesContainer.innerHTML = '';
      const particleCount = window.innerWidth > 768 ? 50 : 20;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 20}s`;
        particlesContainer.appendChild(particle);
      }
    };

    // Generate Data Streams
    const generateDataStreams = () => {
      if (!dataStreamsRef.current) return;
      
      const dataStreams = dataStreamsRef.current;
      dataStreams.innerHTML = '';
      const streamCount = window.innerWidth > 768 ? 10 : 5;

      for (let i = 0; i < streamCount; i++) {
        const stream = document.createElement('div');
        stream.className = 'data-stream';
        stream.style.top = `${Math.random() * 100}%`;
        stream.style.left = `-300px`;
        stream.style.animationDelay = `${Math.random() * 5}s`;
        stream.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        dataStreams.appendChild(stream);
      }
    };

    // Initialize effects
    generateMatrixRain();
    generateParticles();
    generateDataStreams();

    // Regenerate matrix rain on window resize
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        generateMatrixRain();
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    // Interactive mouse glow effect (throttled for performance)
    let mouseTimer;
    const handleMouseMove = (e) => {
      if (!mouseTimer) {
        mouseTimer = setTimeout(() => {
          const mouseX = e.clientX;
          const mouseY = e.clientY;

          // Move orbs slightly based on mouse position
          const orbs = document.querySelectorAll('.orb');
          orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.02;
            const x = (mouseX - window.innerWidth / 2) * speed;
            const y = (mouseY - window.innerHeight / 2) * speed;
            orb.style.transform = `translate(${x}px, ${y}px)`;
          });

          // Make nearby particles glow brighter (desktop only)
          if (window.innerWidth > 768) {
            const particles = document.querySelectorAll('.particle');
            particles.forEach((particle) => {
              const rect = particle.getBoundingClientRect();
              const particleX = rect.left + rect.width / 2;
              const particleY = rect.top + rect.height / 2;
              const distance = Math.sqrt(
                Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
              );

              if (distance < 150) {
                const brightness = 1 - distance / 150;
                particle.style.boxShadow = `0 0 ${20 + brightness * 30}px rgba(0, 255, 255, ${
                  0.5 + brightness * 0.5
                })`;
                particle.style.transform = `scale(${1 + brightness * 0.5})`;
              } else {
                particle.style.boxShadow = '';
                particle.style.transform = '';
              }
            });
          }

          mouseTimer = null;
        }, 16); // ~60fps
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Add a glow that follows the cursor (desktop only)
    let cursorGlow;
    if (window.innerWidth > 768) {
      cursorGlow = document.createElement('div');
      cursorGlow.style.cssText = `
        position: fixed;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
        opacity: 0;
      `;
      document.body.appendChild(cursorGlow);

      const handleCursorMove = (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.style.opacity = '1';
      };

      const handleCursorLeave = () => {
        cursorGlow.style.opacity = '0';
      };

      document.addEventListener('mousemove', handleCursorMove);
      document.addEventListener('mouseleave', handleCursorLeave);
    }

    // Random cyber text effects
    const cyberTexts = [
      'CONNECTING...',
      'NEURAL LINK ESTABLISHED',
      'QUANTUM SYNC ACTIVE',
      'REALITY MATRIX LOADED'
    ];

    // Disable random cyber text effect for mobile
    if (window.innerWidth > 768) {
      const cyberTextInterval = setInterval(() => {
        const randomText = cyberTexts[Math.floor(Math.random() * cyberTexts.length)];
        const tempElement = document.createElement('div');
        tempElement.textContent = randomText;
        tempElement.style.cssText = `
          position: fixed;
          top: ${Math.random() * 100}vh;
          left: ${Math.random() * 100}vw;
          color: var(--primary-cyan);
          font-size: 0.8rem;
          font-weight: 700;
          z-index: 1000;
          opacity: 0.7;
          pointer-events: none;
          animation: fadeOut 3s ease-out forwards;
          text-shadow: 0 0 10px var(--primary-cyan);
        `;
        document.body.appendChild(tempElement);

        setTimeout(() => {
          if (document.body.contains(tempElement)) {
            document.body.removeChild(tempElement);
          }
        }, 3000);
      }, 5000);
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cyberTextInterval);
      if (cursorGlow && document.body.contains(cursorGlow)) {
        document.body.removeChild(cursorGlow);
      }
    };
  }, []);

  return (
    <>
      {/* Enhanced Background Elements */}
      <div className="cyber-bg">
        <div className="cyber-gradient"></div>
        <div className="matrix-rain" ref={matrixRainRef}></div>
      </div>

      <div className="particles" ref={particlesRef}></div>

      <div className="data-streams" ref={dataStreamsRef}></div>

      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      <div className="grid-overlay">
        <div className="grid-lines"></div>
        <div className="grid-glow"></div>
      </div>

      <div className="scanlines"></div>
      <div className="noise-overlay"></div>
    </>
  );
}
