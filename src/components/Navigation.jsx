import React, { useState, useEffect } from 'react';
import anime from 'animejs';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      anime({
        targets: '.nav-menu',
        translateX: [300, 0],
        duration: 500,
        easing: 'easeOutExpo'
      });
      anime({
        targets: '.hamburger-line:nth-child(1)',
        rotate: 45,
        translateY: 8,
        duration: 300
      });
      anime({
        targets: '.hamburger-line:nth-child(2)',
        opacity: 0,
        duration: 300
      });
      anime({
        targets: '.hamburger-line:nth-child(3)',
        rotate: -45,
        translateY: -8,
        duration: 300
      });
    } else {
      anime({
        targets: '.nav-menu',
        translateX: [0, 300],
        duration: 500,
        easing: 'easeOutExpo'
      });
      anime({
        targets: '.hamburger-line',
        rotate: 0,
        translateY: 0,
        opacity: 1,
        duration: 300
      });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span>Portfolio</span>
        </div>
        <div className="nav-desktop">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="nav-mobile">
          <button className="hamburger" onClick={toggleMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className="nav-menu-item"
            onClick={() => scrollToSection(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: background 0.3s, box-shadow 0.3s;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
        }
        .navigation.scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }
        .nav-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
        }
        .nav-desktop {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          background: none;
          border: none;
          font-size: 1rem;
          color: #333;
          cursor: pointer;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          transition: background 0.3s, color 0.3s;
        }
        .nav-link:hover {
          background: #667eea;
          color: white;
        }
        .nav-mobile {
          display: none;
        }
        .hamburger {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .hamburger-line {
          width: 25px;
          height: 3px;
          background: #333;
          transition: all 0.3s;
        }
        .nav-menu {
          position: fixed;
          top: 70px;
          right: 0;
          width: 300px;
          height: calc(100vh - 70px);
          background: white;
          transform: translateX(300px);
          display: flex;
          flex-direction: column;
          padding: 2rem;
          box-shadow: -2px 0 20px rgba(0, 0, 0, 0.1);
        }
        .nav-menu.open {
          transform: translateX(0);
        }
        .nav-menu-item {
          background: none;
          border: none;
          font-size: 1.2rem;
          color: #333;
          cursor: pointer;
          padding: 1rem 0;
          text-align: left;
          border-bottom: 1px solid #eee;
          transition: color 0.3s;
        }
        .nav-menu-item:hover {
          color: #667eea;
        }
        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }
          .nav-mobile {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;