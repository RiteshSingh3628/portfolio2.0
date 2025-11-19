import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs';
import { FiCode, FiServer, FiDatabase, FiLayout } from 'react-icons/fi';
import '../styles/About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Animate content
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Animate cards
      gsap.from('.about-card', {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Animate stats
      const stats = document.querySelectorAll('.stat-number');
      stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));

        ScrollTrigger.create({
          trigger: stat,
          start: 'top 90%',
          onEnter: () => {
            anime({
              targets: stat,
              innerHTML: [0, target],
              duration: 2000,
              round: 1,
              easing: 'easeOutExpo'
            });
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      icon: <FiCode />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with React, Vue, and modern CSS frameworks.'
    },
    {
      icon: <FiServer />,
      title: 'Backend Development',
      description: 'Building scalable server-side applications with Node.js, Express, and RESTful APIs.'
    },
    {
      icon: <FiDatabase />,
      title: 'Database Management',
      description: 'Designing and optimizing databases with MongoDB, PostgreSQL, and MySQL.'
    },
    {
      icon: <FiLayout />,
      title: 'UI/UX Design',
      description: 'Crafting intuitive user experiences with attention to detail and modern design principles.'
    }
  ];

  const stats = [
    { number: 50, label: 'Projects Completed' },
    { number: 5, label: 'Years Experience' },
    { number: 30, label: 'Happy Clients' },
    { number: 100, label: 'Cups of Coffee' }
  ];

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <h2 ref={titleRef} className="section-title">
          <span className="title-number">01.</span> About Me
        </h2>

        <div ref={contentRef} className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate full-stack developer who loves building things for the web.
              My journey in web development started several years ago, and I've been fortunate to work
              on a diverse range of projects.
            </p>
            <p>
              I specialize in creating exceptional digital experiences that are not only functional
              but also beautiful and user-friendly. My focus is on writing clean, efficient code
              and staying up-to-date with the latest technologies and best practices.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge with the developer community.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number" data-target={stat.number}>0</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div ref={cardsRef} className="about-cards">
          {cards.map((card, index) => (
            <div key={index} className="about-card">
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
