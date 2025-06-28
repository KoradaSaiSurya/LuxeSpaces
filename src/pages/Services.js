import React from 'react';
import {Link} from 'react-router-dom'

const servicesData = [
  {
    title: ' 🍽️ Modular Kitchen',
    description: 'Modern modular kitchens with stylish storage, lighting, and smooth workflow.',
    image: '/images/vintage-kitchen.jpg',
    path: '/kitchenGallery'
  },
  {
    title: '🛋️ Living Room',
    description: 'Elegant and cozy living rooms with perfect color tones and sofa placements.',
    image: '/images/vintage-kitchen.jpg',
    path: '/livingroomGallery'
  },
  {
    title: ' 🛏️ Bedroom',
    description: 'Peaceful bedrooms with ambient lighting and beautiful wardrobes.',
    image: '/images/vintage-kitchen.jpg',
    path: '/bedroomGallery'
  },
  {
    title: ' 🛁 Bathroom',
    description: 'Premium bathrooms with glass partitions, cabinets and LED mirrors.',
    image: '/images/vintage-kitchen.jpg',
    path: '/bathroomGallery'
  },
];

const Services = () => {

  return (
    <div className="services-section">
      <h1 className="main-heading">Transforming Spaces into Masterpieces</h1>
      <p className="subtitle">Our expert services include:</p>

      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`service-box ${index % 2 === 0 ? 'row' : 'row reverse'}`}
        >
          <div className="video-box">
            <img src={service.image} alt={service.title} />
          </div>
          <div className="text-box">
            <h2>{service.title}</h2>
            <p>{service.description}</p>

           <Link to={service.path}> <button className="show-btn" >
              Show Designs <span className="arrow">➜</span> 
            </button>
            </Link> 

          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
