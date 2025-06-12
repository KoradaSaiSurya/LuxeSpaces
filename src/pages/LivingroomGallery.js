import React from 'react';

const livingRoomItems = [
  {
    img: '/images/grey-living.jpg',
    title: 'Cozy Grey Living Room',
    price: '₹70,000',
  },
  {
    img: '/images/wooden-living.jpg',
    title: 'Wooden Floor Living Room',
    price: '₹85,000',
  },
  {
    img: '/images/white-living.jpg',
    title: 'Modern White Living Room',
    price: '₹95,000',
  },
  {
    img: '/images/l-living.jpg',
    title: 'L-Shaped Sofa Design',
    price: '₹78,000',
  },
  {
    img: '/images/style-living.jpg',
    title: 'Contemporary Style Room',
    price: '₹1,05,000',
  },
  {
    img: '/images/tv-living.jpg',
    title: 'Wall Mounted TV Setup',
    price: '₹88,000',
  },
  {
    img: '/images/luxury-living.webp',
    title: 'Luxury Lounge Living',
    price: '₹1,25,000',
  },
  {
    img: '/images/elegant-living.jpg',
    title: 'Elegant Curtain Living',
    price: '₹82,000',
  },
  {
    img: '/images/space-living.jpg',
    title: 'Open Space Living Room',
    price: '₹99,000',
  },
];

const LivingRoomGallery = () => {
  return (
    <div className="kitchen-gallery">
      <h1>Living Room Designs</h1>

         <ul className='design-btn'>
        <li><a href="/kitchenGallery">Kitchen Designs</a> </li>
        <li><a href="/livingroomGallery">Living Room Designs</a></li>
        <li><a href="/bedroomGallery">Bedroom Designs</a></li>
        <li><a href="/bathroomGallery">Bathroom Designs</a></li>
     </ul>

      <div className="kitchen-grid">
        {livingRoomItems.map((item, index) => (
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

export default LivingRoomGallery;
