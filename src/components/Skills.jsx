import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs';
import '../styles/Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef(null);

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

      // Animate skill categories
      gsap.from('.skill-category', {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 85%',
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Animate skill bars
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach((bar) => {
        const progress = bar.getAttribute('data-progress');

        ScrollTrigger.create({
          trigger: bar,
          start: 'top 90%',
          onEnter: () => {
            gsap.to(bar, {
              width: `${progress}%`,
              duration: 1.5,
              ease: 'power2.out'
            });

            // Animate percentage text
            const percentText = bar.nextElementSibling;
            if (percentText) {
              anime({
                targets: percentText,
                innerHTML: [0, progress],
                duration: 1500,
                round: 1,
                easing: 'easeOutExpo',
                update: function(anim) {
                  percentText.innerHTML = Math.round(anim.animations[0].currentValue) + '%';
                }
              });
            }
          }
        });
      });

      // Animate tech icons
      anime({
        targets: '.tech-icon',
        scale: [
          { value: 1, duration: 1000 },
          { value: 1.1, duration: 500 },
          { value: 1, duration: 500 }
        ],
        delay: anime.stagger(100),
        loop: true,
        easing: 'easeInOutQuad'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'JavaScript / TypeScript', level: 90 },
        { name: 'HTML / CSS / SASS', level: 95 },
        { name: 'Tailwind / Material-UI', level: 85 }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js / Express', level: 90 },
        { name: 'Python / Django', level: 80 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      name: 'Database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL / MySQL', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Firebase', level: 85 }
      ]
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Docker / Kubernetes', level: 75 },
        { name: 'AWS / Cloud Services', level: 80 },
        { name: 'CI/CD', level: 75 }
      ]
    }
  ];

  const technologies = [
    'React', 'Node.js', 'MongoDB', 'Express', 'Next.js',
    'TypeScript', 'PostgreSQL', 'Docker', 'AWS', 'Git',
    'Python', 'GraphQL', 'Redis', 'Tailwind', 'SASS'
  ];

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills-container">
        <h2 ref={titleRef} className="section-title">
          <span className="title-number">02.</span> Skills & Technologies
        </h2>

        <div className="tech-cloud">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-icon" style={{ animationDelay: `${index * 0.1}s` }}>
              {tech}
            </span>
          ))}
        </div>

        <div ref={skillsRef} className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">0%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        data-progress={skill.level}
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
    </section>
  );
};

export default Skills;
