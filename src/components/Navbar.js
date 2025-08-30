// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaTimes, FaBars } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <div className='nav'>
//       <div className='nav-container'>

       
//         <div className='logo-and-icon'>
//           <Link to="/home" className="interior-logo">
//             <span className="logo-mark">DS</span>
//             <span className="logo-name">Dream Space</span>
//           </Link>

//           <div className='hamburger-icon' onClick={toggleMenu}>
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </div>
//         </div>

     
//         <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
//           <li><Link to="/home" onClick={closeMenu}>Home</Link></li>
//           <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
//           <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
//           <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
//           <li><Link to="/about" onClick={closeMenu}>About</Link></li>
//         </ul>

//       </div>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";

// const Navbar = ({ activePage, setActivePage }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleNavClick = (page) => {
//     setActivePage(page);
//     setIsOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <a href="#home" className="logo" onClick={() => handleNavClick("home")}>
//           LuxeSpaces
//         </a>
//         <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
//           {["home","services","projects","about","why-choose","contact"].map((page) => (
//             <li key={page}>
//               <button
//                 className={`nav-link ${activePage === page ? "active" : ""}`}
//                 onClick={() => handleNavClick(page)}
//               >
//                 {page.replace("-", " ").toUpperCase()}
//               </button>
//             </li>
//           ))}
//         </ul>
//         <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
//           <span></span><span></span><span></span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







import React, { useState } from 'react';

const Navbar = ({ currentPage, onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'why-choose', label: 'Why Choose Us' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          LuxeSpaces
        </a>
        
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href="#"
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

