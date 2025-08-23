import React from 'react';

const servicesData = [
  {
    title: 'TV Unit ',
    description: 'Wall-mounted sleek TV panel with cabinets and LED lights.',
    image: '/images/tv1.jpg',
    price: '₹ 70,000',
  },
  {
    title: 'Office',
    description: 'Comfortable workspace with desk, chair, and bookshelves for productivity.',
    image: '/images/office.jpg',
    price: '₹ 80,000',
  },
  {
    title: 'Kids room',
    description: 'Peaceful bedrooms with ambient lighting and beautiful wardrobes.',
    image: '/images/kidsroom.jpg',
    price: '₹ 85,000',
  },
  {
    title: 'Wardrobe',
    description: 'Sliding wardrobe with mirror, shelves and internal lights.',
    image: '/images/kidsroom.jpg',
    price: '₹ 65,000',
  },
  {
    title: 'Balcony',
    description: 'Cozy balcony with garden chairs, plants and hanging lights.',
    image: '/images/balcony.jpg',
    price: '₹ 40,000',
  },
  {
    title: 'Dining Area',
    description: ' Elegant 6-seater dining table with modern lighting and backdrop.',
    image: '/images/dining.jpg',
    price: '₹ 85,000',
  },
];

const Projects = () => {
  return (
    <div className="services-section-1">
      <h1 className="main-heading1">Top Projects</h1>
      <p className="subtitle1">Explore Our</p>
      <p className="para">
        These projects represent our commitment to delivering stunning interiors that blend functionality with beauty.
        Each design is a result of thoughtful planning, skilled execution, and a deep understanding of your lifestyle.
      </p>

      <div className="pro">
        {servicesData.map((service, index) => (
          <div key={index} className="images">
            <div className="image-box">
              <img className="img" src={service.image} alt={service.title} />
            </div>
            <div className="text-box1">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <h3 style={{ color: 'black', fontSize: '25px' }}>{service.price}</h3>
            </div>
            <div className="card-number">{index + 1}</div> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

