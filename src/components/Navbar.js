import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaServicestack, FaPhone, FaInfoCircle } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ Desktop Navbar */}
      <div className="nav desktop-nav">
        <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
          <div className="logo-and-icon">
            <Link to="/home" className="interior-logo">
              <span className="logo-mark">LS</span>
              <span className="logo-name">LuxeSpaces</span>
            </Link>
          </div>

          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
            <li><Link to="/project2" className={location.pathname === "/project2" ? "active" : ""}>Projects</Link></li>
            <li><Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link></li>
            <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
            <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
          </ul>
        </div>
      </div>

      {/* ✅ Mobile Bottom Navbar */}
      <div className="mobile-bottom-nav">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <FaHome />
          <span>Home</span>
        </Link>
        <Link to="/project2" className={location.pathname === "/project2" ? "active" : ""}>
          <FaProjectDiagram />
          <span>Projects</span>
        </Link>
        <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
          <FaServicestack />
          <span>Services</span>
        </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
          <FaPhone />
          <span>Contact</span>
        </Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
          <FaInfoCircle />
          <span>About</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
