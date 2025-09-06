import React, { useState } from 'react';
import SEO from '../components/SEO';

const kitchenItems = [
  {
    img: '/images/greykitchen.jpg',
    title: 'Modern Grey Kitchen',
    cost: '₹75,000',
    warranty: '10 Years Warranty',
    material: 'Premium Plywood + Granite',
    delivery: 'Free Delivery & Installation'
  },
  {
    img: '/images/wooden-kitchen.jpg',
    title: 'Wooden Finish Kitchen',
    cost: '₹85,000',
    warranty: '8 Years Warranty',
    material: 'Solid Wood Finish',
    delivery: 'Delivery within 15 Days'
  },
  {
    img: '/images/white-kitchen.jpg',
    title: 'Compact White Kitchen',
    cost: '₹65,000',
    warranty: '5 Years Warranty',
    material: 'Glossy White Laminate',
    delivery: 'Free Delivery'
  },
  {
    img: '/images/greykitchen.jpg',
    title: 'L-Shaped Kitchen',
    cost: '₹90,000',
    warranty: '12 Years Warranty',
    material: 'Matte Finish Panels',
    delivery: 'Free Delivery & Installation'
  },
  {
    img: '/images/wooden-kitchen.jpg',
    title: 'Matte Black Kitchen',
    cost: '₹88,000',
    warranty: '10 Years Warranty',
    material: 'High-Quality MDF',
    delivery: 'Fast Delivery'
  },
  {
    img: '/images/white-kitchen.jpg',
    title: 'Island Modular Kitchen',
    cost: '₹88,000',
    warranty: '15 Years Warranty',
    material: 'Imported Laminates',
    delivery: 'Premium Support'
  }
];

const KitchenGallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (

    <>
      <SEO
        title="Kitchen Designs - LuxeSpaces"
        description="Get inspired by LuxeSpaces modern and functional kitchen designs."
        image="https://luxe-spaces.vercel.app/images/kitchen-hero.jpg"
        keywords="kitchen design, LuxeSpaces kitchen, modern kitchen interiors"
      />

    <div className="kitchen-gallery">
      <h1>Kitchen Designs</h1>
      <p> Modern kitchens that blend functionality, style, and lasting comfort.</p>

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
              <p className='cost' style={{ fontSize: "20px", fontWeight: "bold", color: "#f50606ff" }}>{item.cost}</p>
              <p>{item.warranty}</p>
              <p>{item.material}</p>
              <p>{item.delivery}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedItem && (
  <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
    <div className="modal-image-box" onClick={(e) => e.stopPropagation()}>
     
      <button className="close-btn" onClick={() => setSelectedItem(null)}> <img src={selectedItem.img} alt={selectedItem.title} /></button>
    </div>
  </div>
)}

      
    </div>
    </>
  );
};

export default KitchenGallery;
