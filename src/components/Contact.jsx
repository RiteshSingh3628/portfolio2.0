import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import '../styles/Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

      // Animate contact info
      gsap.from('.contact-info-item', {
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 85%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Animate form
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      content: 'contact@example.com',
      link: 'mailto:contact@example.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      content: 'San Francisco, CA',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <h2 ref={titleRef} className="section-title">
          <span className="title-number">04.</span> Get In Touch
        </h2>

        <div className="contact-content">
          <div ref={infoRef} className="contact-info">
            <h3 className="contact-subtitle">Let's Work Together</h3>
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </p>

            <div className="contact-info-list">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-info-item">
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <h4 className="info-title">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="info-link">{item.content}</a>
                    ) : (
                      <p className="info-text">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="6"
              />
            </div>

            <button type="submit" className="form-submit">
              <span>Send Message</span>
              <FiSend />
            </button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <p className="footer-text">
          Designed & Built by <span className="highlight">Your Name</span>
        </p>
        <p className="footer-year">© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
