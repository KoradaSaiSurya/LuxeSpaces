import React from 'react';

const bedroomItems = [
  {
    img: '/images/blue-bedroom.jpg',
    title: 'Classic Blue Bedroom',
    price: '₹70,000',
  },
  {
    img: '/images/modern-bedroom.jpg',
    title: 'Modern Minimal Bedroom',
    price: '₹80,000',
  },
  {
    img: '/images/gold-bedroom.avif',
    title: 'Luxury Gold Bedroom',
    price: '₹1,20,000',
  },
  {
    img: '/images/pastal-bedroom.jpg',
    title: 'Pastel Theme Bedroom',
    price: '₹65,000',
  },
  {
    img: '/images/wooden-bedroom.jpg',
    title: 'Wood Finish Bedroom',
    price: '₹90,000',
  },
  {
    img: '/images/purple-bedroom.jpeg',
    title: 'Royal Purple Bedroom',
    price: '₹1,10,000',
  },
  {
    img: '/images/kids-bedroom.avif',
    title: 'Kids Play Bedroom',
    price: '₹58,000',
  },
  {
    img: '/images/studio-bedroom.jpg',
    title: 'Studio Style Bedroom',
    price: '₹95,000',
  },
  {
    img: '/images/green-bedroom.jpg',
    title: 'Green Natural Bedroom',
    price: '₹88,000',
  },
];

const BedroomGallery = () => {
  return (
    <div className="kitchen-gallery">
      <h1>Bedroom Designs</h1>

         <ul className='design-btn'>
        <li><a href="/kitchenGallery">Kitchen Designs</a> </li>
        <li><a href="/livingroomGallery">Living Room Designs</a></li>
        <li><a href="/bedroomGallery">Bedroom Designs</a></li>
        <li><a href="/bathroomGallery">Bathroom Designs</a></li>
     </ul>

      <div className="kitchen-grid">
        {bedroomItems.map((item, index) => (
          <div className="kitchen-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BedroomGallery;
