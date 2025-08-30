import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    
    // Intersection Observer for footer animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector('.footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Residential Design',
    'Commercial Spaces',
    'Furniture Selection',
    'Color Consultation',
    'Lighting Design',
    'Space Planning'
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#', name: 'Facebook' },
    { icon: 'fab fa-instagram', url: '#', name: 'Instagram' },
    { icon: 'fab fa-twitter', url: '#', name: 'Twitter' },
    { icon: 'fab fa-linkedin-in', url: '#', name: 'LinkedIn' },
    { icon: 'fab fa-pinterest-p', url: '#', name: 'Pinterest' },
    { icon: 'fab fa-youtube', url: '#', name: 'YouTube' }
  ];

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', text: '123 Design Street, NY 10001' },
    { icon: 'fas fa-phone', text: '+1 (555) 123-4567' },
    { icon: 'fas fa-envelope', text: 'hello@luxespaces.com' },
    { icon: 'fas fa-clock', text: 'Mon-Fri: 9AM-6PM' }
  ];

  return (
    <footer className={`footer ${isVisible ? 'footer-visible' : ''}`}>
      {/* Decorative Wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="footer-wave-path"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="footer-wave-path"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="footer-wave-path"></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section company-info">
              <div className="footer-logo">
                <h3>LuxeSpaces</h3>
                <div className="logo-underline"></div>
              </div>
              <p className="company-description">
                Transforming spaces into extraordinary environments with over 15 years of 
                award-winning interior design excellence. Your dream space awaits.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    className="social-link"
                    aria-label={social.name}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <i className={social.icon}></i>
                    <span className="social-tooltip">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">
                <i className="fas fa-link"></i>
                Quick Links
              </h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    <a href={link.href} className="footer-link">
                      <i className="fas fa-chevron-right"></i>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="footer-title">
                <i className="fas fa-tools"></i>
                Our Services
              </h4>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    <a href="#services" className="footer-link">
                      <i className="fas fa-chevron-right"></i>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-title">
                <i className="fas fa-address-book"></i>
                Get In Touch
              </h4>
              <div className="contact-info-footer">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="contact-item-footer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <i className={info.icon}></i>
                    <span>{info.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Newsletter Signup */}
              <div className="newsletter-signup">
                <h5>Stay Updated</h5>
                <div className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="newsletter-input"
                  />
                  <button className="newsletter-btn">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Awards & Certifications */}
          <div className="footer-awards">
            <div className="awards-container">
              <div className="award-item">
                <i className="fas fa-trophy"></i>
                <span>Best Design 2023</span>
              </div>
              <div className="award-item">
                <i className="fas fa-medal"></i>
                <span>Excellence Award</span>
              </div>
              <div className="award-item">
                <i className="fas fa-star"></i>
                <span>5-Star Rated</span>
              </div>
              <div className="award-item">
                <i className="fas fa-certificate"></i>
                <span>Certified Professional</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>
                  © {currentYear} <strong>LuxeSpaces</strong>. All rights reserved. 
                  <span className="heart">Made with <i className="fas fa-heart"></i> for beautiful spaces</span>
                </p>
              </div>
              <div className="footer-bottom-links">
                <a href="#privacy" className="bottom-link">Privacy Policy</a>
                <a href="#terms" className="bottom-link">Terms of Service</a>
                <a href="#cookies" className="bottom-link">Cookie Policy</a>
                <a href="#sitemap" className="bottom-link">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;