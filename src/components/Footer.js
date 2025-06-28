import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>Interior Vision</h2>
          <p>Transforming Spaces into Masterpieces</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
          <li><Link to="/home" >Home</Link></li>
          <li><Link to="/projects" >Projects</Link></li>
          <li><Link to="/services" >Services</Link></li>
          <li><Link to="/contact" >Contact</Link></li>
          <li><Link to="/about" >About</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        
      </div>

      <div className="footer-bottom">
        <p>© 2025 Interior Vision. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
