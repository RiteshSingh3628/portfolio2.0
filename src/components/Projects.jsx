import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-title', {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });

      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with data visualization',
      technologies: ['React', 'D3.js', 'OpenWeather API'],
      link: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media performance tracking',
      technologies: ['Vue.js', 'Python', 'Flask', 'Chart.js'],
      link: '#'
    }
  ];

  return (
    <section id="projects" ref={projectsRef} className="projects">
      <div className="container">
        <h2 className="projects-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.title}</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .projects {
          padding: 5rem 0;
          background: #f8f9fa;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .projects-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
          color: #333;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        .project-image {
          height: 200px;
          overflow: hidden;
        }
        .image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: bold;
        }
        .project-content {
          padding: 1.5rem;
        }
        .project-content h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #333;
        }
        .project-content p {
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .tech-tag {
          background: #e9ecef;
          color: #495057;
          padding: 0.3rem 0.6rem;
          border-radius: 20px;
          font-size: 0.8rem;
        }
        .project-link {
          display: inline-block;
          color: #667eea;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s;
        }
        .project-link:hover {
          color: #764ba2;
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;