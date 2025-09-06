// import React from "react";

// const features = [
//   { title: "✨ Premium Quality", description: "We deliver top-notch materials and craftsmanship." },
//   { title: "🎨 Custom Designs", description: "Tailor-made interiors to suit your preferences." },
//   { title: "⏱️ Timely Delivery", description: "We value your time and ensure on-time project completion." },
//   { title: "💰 Affordable Pricing", description: "Luxury doesn’t have to be expensive with us." }
// ];

// const WhyChoose = () => {
//   return (
//     <section id="why-choose" className="page-section">
//       <h2>Why Choose Us?</h2>
//       <div className="features-grid">
//         {features.map((feature, i) => (
//           <div key={i} className="feature-card">
//             <h3>{feature.title}</h3>
//             <p>{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyChoose;






import React from 'react';
import SEO from '../components/SEO';

const WhyChoose = () => {
  const features = [
    {
      icon: 'fas fa-award',
      title: 'Award-Winning Team',
      description: 'Our designers have won multiple industry awards for innovation and excellence in interior design.'
    },
    {
      icon: 'fas fa-clock',
      title: 'On-Time Delivery',
      description: 'We pride ourselves on completing projects on schedule without compromising on quality.'
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Transparent Pricing',
      description: 'No hidden costs or surprise fees. We provide detailed quotes and stick to our commitments.'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Sustainable Design',
      description: 'We prioritize eco-friendly materials and sustainable design practices in all our projects.'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Support',
      description: 'Our customer service team is available around the clock to address any questions or concerns.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Quality Guarantee',
      description: 'We stand behind our work with comprehensive warranties and satisfaction guarantees.'
    }
  ];

  return (
    <>
      <SEO
        title="Why Choose LuxeSpaces"
        description="Learn why LuxeSpaces is the top choice for premium interior design services."
        image="https://luxe-spaces.vercel.app/images/whychooseus-hero.jpg"
        keywords="why choose LuxeSpaces, interior design experts, top interior designers"
      />

    <section className="page-section active">
      <div className="container">
        <div className="section-header">
  <h2 className='why-h2'>
    <i className="fas fa-star"></i> Why Choose LuxeSpaces
  </h2>
  <p>Discover what makes us the preferred choice for interior design excellence</p>
</div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default WhyChoose;