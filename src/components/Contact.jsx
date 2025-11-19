import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-title', {
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });

      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });

      gsap.from('.contact-info', {
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Animate form submission
    anime({
      targets: '.contact-form',
      scale: [1, 0.98, 1],
      duration: 300,
      easing: 'easeInOutQuad'
    });

    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={contactRef} className="contact">
      <div className="container">
        <h2 className="contact-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p>hello@example.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>San Francisco, CA</p>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact {
          padding: 5rem 0;
          background: #f8f9fa;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .contact-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
          color: #333;
        }
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e9ecef;
          border-radius: 5px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #667eea;
        }
        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 1rem;
          font-size: 1.1rem;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
          transition: transform 0.3s;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
        }
        .contact-info {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .info-item {
          margin-bottom: 2rem;
        }
        .info-item h3 {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 0.5rem;
        }
        .info-item p {
          color: #666;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        .social-link {
          color: #667eea;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s;
        }
        .social-link:hover {
          color: #764ba2;
        }
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;