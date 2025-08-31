import React, { useState } from 'react';

const kitchenItems = [
  {
    img: '/images/grey-living.jpg',
    title: 'Cozy Grey Living Room',
    cost: '₹75,000',
    warranty: '10 Years Warranty',
    material: 'Premium Plywood + Granite',
    delivery: 'Free Delivery & Installation'
  },
  {
    img: '/images/wooden-living.jpg',
    title: 'Wooden Floor Living Room',
    cost: '₹85,000',
    warranty: '8 Years Warranty',
    material: 'Solid Wood Finish',
    delivery: 'Delivery within 15 Days'
  },
  {
    img: '/images/l-living.jpg',
    title: 'Open Space Living Room',
    cost: '₹65,000',
    warranty: '5 Years Warranty',
    material: 'Glossy White Laminate',
    delivery: 'Free Delivery'
  },
  {
     img: '/images/elegant-living.jpg',
    title: 'Elegant Curtain Living',
    cost: '₹90,000',
    warranty: '12 Years Warranty',
    material: 'Matte Finish Panels',
    delivery: 'Free Delivery & Installation'
  },
  {
   img: '/images/style-living.jpg',
    title: 'Luxury Lounge Living',
    cost: '₹88,000',
    warranty: '10 Years Warranty',
    material: 'High-Quality MDF',
    delivery: 'Fast Delivery'
  },
  {
     img: '/images/tv-living.jpg',
    title: 'Wall Mounted TV Setup',
    cost: '₹88,000',
    warranty: '15 Years Warranty',
    material: 'Imported Laminates',
    delivery: 'Premium Support'
  },{
    img: '/images/wooden-living.jpg',
    title: 'Wooden Floor Living Room',
    cost: '₹85,000',
    warranty: '8 Years Warranty',
    material: 'Solid Wood Finish',
    delivery: 'Delivery within 15 Days'
  },
  {
    img: '/images/l-living.jpg',
    title: 'Open Space Living Room',
    cost: '₹65,000',
    warranty: '5 Years Warranty',
    material: 'Glossy White Laminate',
    delivery: 'Free Delivery'
  }
];

const LivingroomGallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="kitchen-gallery">
      <h1>Livingroom Designs</h1>

      <ul className='design-btn'>
        <li><a href="/kitchenGallery">Kitchen Designs</a> </li>
        <li><a href="/livingroomGallery">Living Designs</a></li>
        <li><a href="/bedroomGallery">Bedroom Designs</a></li>
        <li><a href="/bathroomGallery">Bathroom Designs</a></li>
     </ul>

      <div className="kitchen-grid">
        {kitchenItems.map((item, index) => (
          <div 
            className="kitchen-card" 
            key={index} 
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.img} alt={item.title} />
            <div className="card-info">
              <h3>{item.title}</h3>
              <p>{item.cost}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedItem.img} alt={selectedItem.title} />
            <h2>{selectedItem.title}</h2>
            <p><b>Cost:</b> {selectedItem.cost}</p>
            <p><b>Warranty:</b> {selectedItem.warranty}</p>
            <p><b>Material:</b> {selectedItem.material}</p>
            <p><b>Delivery:</b> {selectedItem.delivery}</p>
            <button className="close-btn" onClick={() => setSelectedItem(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LivingroomGallery;
