import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from('.hero-title', { y: 50, opacity: 0, duration: 1, ease: 'power2.out' })
      .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
      .from('.hero-description', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .from('.hero-button', { scale: 0, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.2');
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm a Full-Stack Developer</h1>
        <h2 className="hero-subtitle">Creating Digital Experiences</h2>
        <p className="hero-description">
          Passionate about building scalable web applications and beautiful user interfaces.
          Specialized in React, Node.js, and modern web technologies.
        </p>
        <button className="hero-button" onClick={scrollToAbout}>Explore My Work</button>
      </div>
      <div className="hero-bg">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
      </div>
      <style jsx>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .hero-content {
          text-align: center;
          z-index: 2;
          max-width: 800px;
          padding: 0 2rem;
        }
        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .hero-subtitle {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }
        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          opacity: 0.8;
        }
        .hero-button {
          background: white;
          color: #667eea;
          border: none;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          font-weight: bold;
          border-radius: 50px;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .hero-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .hero-shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
        }
        .shape-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 10%;
          animation: float 6s ease-in-out infinite;
        }
        .shape-2 {
          width: 200px;
          height: 200px;
          top: 60%;
          right: 10%;
          animation: float 8s ease-in-out infinite reverse;
        }
        .shape-3 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          left: 50%;
          animation: float 7s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.5rem;
          }
          .hero-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;