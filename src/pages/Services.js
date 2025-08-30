// import React from 'react';
// import {Link} from 'react-router-dom'

// const servicesData = [
//   {
//     title: ' 🍽️ Modular Kitchen',
//     description: 'Modern modular kitchens with stylish storage, lighting, and smooth workflow.',
//     image: '/images/vintage-kitchen.jpg',
//     path: '/kitchenGallery'
//   },
//   {
//     title: '🛋️ Living Room',
//     description: 'Elegant and cozy living rooms with perfect color tones and sofa placements.',
//     image: '/images/vintage-kitchen.jpg',
//     path: '/livingroomGallery'
//   },
//   {
//     title: ' 🛏️ Bedroom',
//     description: 'Peaceful bedrooms with ambient lighting and beautiful wardrobes.',
//     image: '/images/vintage-kitchen.jpg',
//     path: '/bedroomGallery'
//   },
//   {
//     title: ' 🛁 Bathroom',
//     description: 'Premium bathrooms with glass partitions, cabinets and LED mirrors.',
//     image: '/images/vintage-kitchen.jpg',
//     path: '/bathroomGallery'
//   },
// ];

// const Services = () => {

//   return (
//     <div className="services-section">
//       <h1 className="main-heading">Transforming Spaces into Masterpieces</h1>
//       <p className="subtitle">Our expert services include:</p>

     

//       {servicesData.map((service, index) => (
//         <div
//           key={index}
//           className={`service-box ${index % 2 === 0 ? 'row' : 'row reverse'}`}
//         >
          
//           <div className="video-box">
//             <img src={service.image} alt={service.title} />
//           </div>
//           <div className="text-box">
//             <h2>{service.title}</h2>
//             <p>{service.description}</p>

//            <Link to={service.path}> <button className="show-btn" >
//               Show Designs <span className="arrow">➜</span> 
//             </button>
//             </Link>

          

//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Services;


// import React from "react";

// const servicesData = [
//   {
//     title: "🍽️ Modular Kitchen",
//     description: "Modern modular kitchens with stylish storage, lighting, and smooth workflow."
//   },
//   {
//     title: "🛋️ Living Room",
//     description: "Elegant living spaces designed for comfort and luxury."
//   },
//   {
//     title: "🛏️ Bedrooms",
//     description: "Cozy bedrooms tailored to your style and relaxation."
//   },
//   {
//     title: "🪑 Furniture",
//     description: "Custom-made furniture pieces that fit perfectly in your home."
//   }
// ];

// const Services = () => {
//   return (
//     <section id="services" className="page-section">
//       <h2>Our Services</h2>
//       <div className="services-grid">
//         {servicesData.map((service, index) => (
//           <div key={index} className="service-card">
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;






import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-home',
      title: 'Residential Design',
      description: 'Complete home makeovers from concept to completion. We transform your living spaces into beautiful, functional environments.'
    },
    {
      icon: 'fas fa-building',
      title: 'Commercial Spaces',
      description: 'Professional office and retail space design that enhances productivity and creates memorable customer experiences.'
    },
    {
      icon: 'fas fa-couch',
      title: 'Furniture Selection',
      description: 'Curated furniture and decor selection that perfectly complements your space and reflects your personal style.'
    },
    {
      icon: 'fas fa-palette',
      title: 'Color Consultation',
      description: 'Expert color schemes and paint selection to create the perfect ambiance and mood for every room.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Lighting Design',
      description: 'Strategic lighting solutions that enhance your space\'s functionality while creating beautiful atmospheres.'
    },
    {
      icon: 'fas fa-ruler-combined',
      title: 'Space Planning',
      description: 'Optimal space utilization and layout planning to maximize functionality and flow in any environment.'
    }
  ];

  return (
    <section className="page-section active">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>We offer comprehensive interior design solutions tailored to your unique style and needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;