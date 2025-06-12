import React from 'react';

const kitchenItems = [
  {
    img: '/images/greykitchen.jpg',
    title: 'Modern Grey Kitchen',
    cost: '₹75,000',
  },
  {
    img: '/images/wooden-kitchen.jpg',
    title: 'Wooden Finish Kitchen',
    cost: '₹85,000',
  },
  {
    img: '/images/white-kitchen.jpg',
    title: 'Compact White Kitchen',
    cost: '₹65,000',
  },
  {
    img: '/images/l-shape.avif',
    title: 'L-Shaped Kitchen',
    cost: '₹90,000',
  },
  {
    img: '/images/black-kitchen.webp',
    title: 'Matte Black Kitchen',
    cost: '₹88,000',
  },
  {
    img: '/images/island-kitchen.webp',
    title: 'Island Modular Kitchen',
    cost: '₹88,000',
  },  
  {
    img: '/images/blue-kitchen.avif',
    title: 'Royal Blue Kitchen',
    cost: '₹88,000',
  },
  {
    img: '/images/vintage-kitchen.jpg',
    title: 'Vintage Style Kitchen',
    cost: '₹78,000',
  },
  {
    img: '/images/glass-kitchen.jpg',
    title: 'Glass Finish Kitchen',
    cost: '₹1,25,000',
  },
];


const KitchenGallery = () => {
  return (
    <div className="kitchen-gallery">
      <h1>Kitchen Designs</h1>

      
      <ul className='design-btn'>
        <li><a href="/kitchenGallery">Kitchen Designs</a> </li>
        <li><a href="/livingroomGallery">Living Designs</a></li>
        <li><a href="/bedroomGallery">Bedroom Designs</a></li>
        <li><a href="/bathroomGallery">Bathroom Designs</a></li>
     </ul>

      <div className="kitchen-grid">
        {kitchenItems.map((item, index) => (
          <div className="kitchen-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KitchenGallery;

