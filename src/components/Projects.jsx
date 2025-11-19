import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import '../styles/Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);

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

      // Animate project cards
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 85%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Real-time social media analytics dashboard with data visualization and insights. Features responsive design and dark mode.',
      tags: ['Next.js', 'TypeScript', 'Chart.js', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tags: ['React', 'Firebase', 'Material-UI', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Weather Forecast App',
      description: 'Modern weather application with location-based forecasts, interactive maps, and detailed weather metrics.',
      tags: ['Vue.js', 'API Integration', 'SASS', 'Leaflet'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system for portfolio websites with drag-and-drop builder and real-time preview.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging application with group chats, file sharing, and end-to-end encryption.',
      tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-container">
        <h2 ref={titleRef} className="section-title">
          <span className="title-number">03.</span> Featured Projects
        </h2>

        <div ref={projectsRef} className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image" style={{ background: project.image }}>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
