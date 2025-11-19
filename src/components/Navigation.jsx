import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/Navigation.css';

const Navigation = () => {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Animate nav on mount
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 3
    });

    // Scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power3.out'
      });
    } else {
      gsap.to(menuRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power3.in'
      });
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isOpen) toggleMenu();
    }
  };

  const menuItems = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <>
      <nav ref={navRef} className={`navigation ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <span className="logo-bracket">{'<'}</span>
            <span className="logo-text">Portfolio</span>
            <span className="logo-bracket">{'/>'}</span>
          </div>

          <ul className="nav-menu desktop">
            {menuItems.map((item, index) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="nav-link"
                  style={{ animationDelay: `${3 + index * 0.1}s` }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <div ref={menuRef} className="mobile-menu">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={item}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: isOpen ? `slideIn 0.5s forwards ${index * 0.1}s` : 'none'
              }}
            >
              <button onClick={() => scrollToSection(item)} className="mobile-link">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
