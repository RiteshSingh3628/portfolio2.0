import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.from('.about-image', {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="about">
      <div className="container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm a passionate full-stack developer with over 5 years of experience
            building web applications. I love creating clean, efficient, and
            user-friendly solutions using modern technologies.
          </p>
          <p>
            My expertise spans across frontend frameworks like React and Vue.js,
            backend technologies including Node.js and Python, and databases
            such as MongoDB and PostgreSQL.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <span>Profile Image</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about {
          padding: 5rem 0;
          background: #f8f9fa;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .about-content h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #333;
        }
        .about-content p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          color: #666;
        }
        .about-stats {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }
        .stat {
          text-align: center;
        }
        .stat h3 {
          font-size: 2rem;
          color: #667eea;
          margin-bottom: 0.5rem;
        }
        .stat p {
          color: #666;
          font-size: 0.9rem;
        }
        .about-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .image-placeholder {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 1.2rem;
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .about-stats {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;