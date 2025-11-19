import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills-title', {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });

      gsap.from('.skill-category', {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });
    }, skillsRef);

    // Animate skill bars on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.skill-bar-fill');
          bars.forEach((bar, index) => {
            anime({
              targets: bar,
              width: bar.dataset.width,
              duration: 1500,
              delay: index * 200,
              easing: 'easeOutExpo'
            });
          });
        }
      });
    });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      ctx.revert();
      observer.disconnect();
    };
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TypeScript', level: 80 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express', level: 85 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 75 },
        { name: 'Linux', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" ref={skillsRef} className="skills">
      <div className="container">
        <h2 className="skills-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        data-width={`${skill.level}%`}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .skills {
          padding: 5rem 0;
          background: white;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .skills-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
          color: #333;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }
        .skill-category {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        .skill-category h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #333;
          text-align: center;
        }
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .skill-name {
          font-weight: 500;
          color: #333;
        }
        .skill-percentage {
          color: #667eea;
          font-weight: bold;
        }
        .skill-bar {
          height: 8px;
          background: #e9ecef;
          border-radius: 4px;
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 4px;
          transition: width 1.5s ease-out;
        }
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;