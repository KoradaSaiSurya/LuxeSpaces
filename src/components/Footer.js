import React from "react";
import { FaHome, FaTools, FaServicestack, FaQuestionCircle, FaInfoCircle, FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdKitchen, MdBedroomParent, MdLiving, MdBathroom } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Logo + About */}
        <div className="footer-section">
          <h2 className="logo">LuxeSpaces</h2>
          <p>
            Transforming interiors with elegance and modern design.  
            Bringing comfort, creativity, and lasting beauty to every space.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/"><FaHome /> Home</a></li>
            <li><a href="/projects"><FaTools /> Projects</a></li>
            <li><a href="/services"><FaServicestack /> Services</a></li>
            <li><a href="/whyChoose"><FaQuestionCircle /> Why Choose Us</a></li>
            <li><a href="/about"><FaInfoCircle /> About</a></li>
            <li><a href="/contact"><FaPhoneAlt /> Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Room Designs */}
        <div className="footer-section">
          <h3>Design Categories</h3>
          <ul>
            <li><a href="/kitchenGallery"><MdKitchen /> Kitchen</a></li>
            <li><a href="/bedroomGallery"><MdBedroomParent /> Bedroom</a></li>
            <li><a href="/livingroomGallery"><MdLiving /> Living Room</a></li>
            <li><a href="/bathroomGallery"><MdBathroom /> Bathroom</a></li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="www.linkedin.com/in/sai-surya-korada"><FaFacebook /></a>
            <a href="www.linkedin.com/in/sai-surya-korada"><FaInstagram /></a>
            <a href="www.linkedin.com/in/sai-surya-korada"><FaTwitter /></a>
            <a href="www.linkedin.com/in/sai-surya-korada"><FaYoutube /></a>
          </div>
          <p className="contact-info2">📞 +91 98765 43210</p>
          <p className="contact-info2">✉️ luxespaces@email.com</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LuxeSpaces. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
