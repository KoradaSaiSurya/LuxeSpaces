// import React from 'react'
// import { BrowserRouter, Route ,Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Services from './pages/Services'
// import KitchenGallery from './pages/KitchenGallery'
// import Projects from './pages/Projects'
// import BathroomGallery from './pages/BathroomGallery'
// import BedroomGallery from './pages/BedroomGallery'
// import LivingroomGallery from './pages/LivingroomGallery'
// import Navbar from './components/Navbar'
// import Contact from './pages/Contact'
// import About from './pages/About'
// import AddProject from './pages/AddProject'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//          <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home/>} />
//         <Route path="/services" element={<Services />} />
//         <Route path='/kitchenGallery' element={<KitchenGallery />} />
//         <Route path='/bathroomGallery' element={<BathroomGallery />} />
//         <Route path='/bedroomGallery' element={<BedroomGallery />} />
//         <Route path='/livingroomGallery' element={<LivingroomGallery />} />
//         <Route path='/projects' element={<Projects />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/addProject' element={<AddProject />} />

//       </Routes>
      
//     </BrowserRouter>  
//   )
// }

// export default App




// import React, { useState, useEffect } from "react";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Projects from "./pages/Projects";
// import About from "./pages/About";
// import WhyChoose from "./pages/WhyChoose";
// import Contact from "./pages/Contact";
// import Navbar from './components/Navbar'

// function App() {
//   const [activePage, setActivePage] = useState("home");

//   useEffect(() => {
//     setActivePage("home"); // default
//   }, []);

//   const renderPage = () => {
//     switch (activePage) {
//       case "home": return <Home setActivePage={setActivePage} />;
//       case "services": return <Services />;
//       case "projects": return <Projects />;
//       case "about": return <About />;
//       case "why-choose": return <WhyChoose />;
//       case "contact": return <Contact />;
//       default: return <Home />;
//     }
//   };

//   return (
//     <>
//       <Navbar activePage={activePage} setActivePage={setActivePage} />
//       {renderPage()}
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import WhyChoose from './pages/WhyChoose';
import Contact from './pages/Contact';
import PasswordModal from './components/PasswordModal';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import KitchenGallery from './pages/KitchenGallery';
import BedroomGallery from './pages/BedroomGallery';
import BathroomGallery from './pages/BathroomGallery';
import LivingroomGallery from './pages/LivingroomGallery';

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Modern Living Room',
      price: 15000,
      description: 'Contemporary design with clean lines and neutral tones',
      image: '/images/livingroom.jpg'   // ✅ image add chesam
    },
    {
      id: 2,
      name: 'Luxury Bedroom Suite',
      price: 12500,
      description: 'Elegant master bedroom with custom furniture',
      image: '/images/bedroom.jpg'   // ✅ image add chesam
    },
    {
      id: 3,
      name: 'Executive Office',
      price: 20000,
      description: 'Professional workspace design for productivity',
      image: '/images/office.jpg'   // ✅ image add chesam
    }
  ]);

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load projects from localStorage
  useEffect(() => {
    const savedProjects = localStorage.getItem('luxeSpacesProjects');
    if (savedProjects) {
      const parsedProjects = JSON.parse(savedProjects);
      setProjects(prev => [...prev, ...parsedProjects]);
    }
  }, []);

  // Save projects to localStorage
  const saveProject = (project) => {
    const savedProjects = localStorage.getItem('luxeSpacesProjects');
    const existing = savedProjects ? JSON.parse(savedProjects) : [];
    const updated = [...existing, project];
    localStorage.setItem('luxeSpacesProjects', JSON.stringify(updated));
  };

  const handleAddProject = () => {
    if (!isAuthenticated) {
      setShowPasswordModal(true);
      return false;
    }
    return true;
  };

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true);
    setShowPasswordModal(false);
  };

  const handlePasswordCancel = () => {
    setShowPasswordModal(false);
    setIsAuthenticated(false);
  };

  const addProject = (projectData) => {
    const newProject = {
      id: Date.now(),
      ...projectData,
      timestamp: new Date().toISOString()
    };

    setProjects(prev => [...prev, newProject]);
    saveProject(newProject);
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/projects"
          element={
            <Projects
              projects={projects}
              onAddProject={handleAddProject}
              onProjectSubmit={addProject}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/why-choose" element={<WhyChoose />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kitchenGallery" element={<KitchenGallery />} />
        <Route path="/bathroomGallery" element={<BathroomGallery />} />
        <Route path="/bedroomGallery" element={<BedroomGallery />} />
        <Route path="/livingroomGallery" element={<LivingroomGallery />} />
      </Routes>

      <PasswordModal
        show={showPasswordModal}
        onSuccess={handlePasswordSuccess}
        onCancel={handlePasswordCancel}
      />

      <Footer />
    </Router>
  );
}

export default App;
