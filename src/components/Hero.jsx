import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import anime from 'animejs';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import '../styles/Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const socialRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.5 });

    // Animate title with split text effect
    tl.from(titleRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power4.out'
    });

    // Animate subtitle
    tl.from(subtitleRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4');

    // Animate description
    tl.from(descRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5');

    // Animate CTA buttons
    tl.from(ctaRef.current.children, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    }, '-=0.3');

    // Animate social icons
    tl.from(socialRef.current.children, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.5');

    // Animate arrow
    gsap.to(arrowRef.current, {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 4.5
    });

    // Floating background elements
    anime({
      targets: '.floating-element',
      translateY: [
        { value: -20, duration: 2000 },
        { value: 20, duration: 2000 }
      ],
      translateX: [
        { value: -10, duration: 2000 },
        { value: 10, duration: 2000 }
      ],
      opacity: [
        { value: 0.3, duration: 2000 },
        { value: 0.6, duration: 2000 }
      ],
      delay: anime.stagger(200),
      loop: true,
      easing: 'easeInOutSine'
    });

  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="floating-element"></div>
        ))}
      </div>

      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          <span>Full-Stack</span>
          <span>Developer</span>
        </h1>

        <div ref={subtitleRef} className="hero-subtitle">
          <span className="code-bracket">{'{ '}</span>
          Building Digital Experiences
          <span className="code-bracket">{' }'}</span>
        </div>

        <p ref={descRef} className="hero-description">
          Crafting elegant solutions with modern technologies.
          Specialized in React, Node.js, and everything in between.
        </p>

        <div ref={ctaRef} className="hero-cta">
          <button className="btn btn-primary" onClick={scrollToProjects}>
            View Projects
          </button>
          <button className="btn btn-secondary" onClick={scrollToContact}>
            Get In Touch
          </button>
        </div>

        <div ref={socialRef} className="hero-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FiGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FiLinkedin />
          </a>
          <a href="mailto:contact@example.com" className="social-link">
            <FiMail />
          </a>
        </div>

        <div ref={arrowRef} className="scroll-indicator">
          <FiArrowDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;
