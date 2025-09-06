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
//       <h2>Our Services</h2>    <div key={index} className="service-card">
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
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: 'fas fa-utensils',
      title: 'Modular Kitchen',
      description: 'Modern modular kitchen designs with stylish layouts and maximum space.',
      link: '/kitchenGallery'
    },
    {
      icon: 'fas fa-bath',
      title: 'Luxury Bathrooms',
      description: 'Transform your bathroom into a luxurious, spa-like retreat with fittings.',
      link: '/bathroomGallery'
    },
    {
      icon: 'fas fa-bed',
      title: 'Elegant Bedrooms',
      description: 'Beautiful bedroom interiors designed for comfort, peace, and style.',
      link: '/bedroomGallery'
    },
    {
      icon: 'fas fa-couch',
      title: 'Living Rooms',
      description: 'Cozy and stylish living rooms designed for family gatherings and relaxation.',
      link: '/livingroomGallery'
    },
    {
      icon: 'fas fa-chair',
      title: 'Dining Spaces',
      description: 'Elegant dining areas crafted with perfect lighting and modern furniture.',
      link: '/livingroomGallery'
    },
    {
      icon: 'fas fa-tree',
      title: 'Balcony & Outdoor',
      description: 'Beautiful balcony and outdoor setups with greenery and relaxing vibes.',
      link: '/livingroomGallery'
    }
  ];

  return (
     <>
      <SEO
        title="Our Services - LuxeSpaces"
        description="Explore LuxeSpaces premium interior design services including living rooms, kitchens, bedrooms, and more."
        image="https://luxe-spaces.vercel.app/images/services-hero.jpg"
        keywords="LuxeSpaces services, interior design services, home design"
      />

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

              {/* Navigate to respective gallery */}
              <button 
                className="show-btn"
                onClick={() => navigate(service.link)}
              >
                Show Designs <span className="arrow">➜</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;
