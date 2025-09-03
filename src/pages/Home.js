// import React from 'react'
// import Navbar from '../components/Navbar'
// import Projects from './Projects';
// import Footer from '../components/Footer';
// import Services from './Services';
// import Contact from './Contact';
// import About from './About';
// import AddProject from './AddProject';

// const Home = () => {
//    const features = [
//     { icon: <img src="/images/creative-design.png" alt="Creative Design" className="feature-icon" />,  title: "Creative Designs", desc: "Unique and elegant interior themes tailored for you." },
//     { icon: <img src="/images/price.png" alt="Creative Design" className="feature-icon" />, title: "Affordable Pricing",   desc: "High-quality designs that suit your budget." },
//     { icon: <img src="/images/delivery.png" alt="Creative Design" className="feature-icon" />, title: "On-Time Delivery",   desc: "Timely completion of all projects guaranteed." },
//     { icon: <img src="/images/happy.png" alt="Creative Design" className="feature-icon" />,  title: "Happy Clients",  desc: "200+ clients satisfied with our work." },
//   ];

//   return (
//     <div>
//       <Navbar />
//      <div className="home-container">
//         <img className="intro-video" 
//            src ='/images/new-photo2.jpg' alt='img'/> 
//         <div className="overlay" />
//         <div className="video-text">
//           <h1>Transforming Spaces into Masterpieces</h1>
//           <p>Modern | Elegant | Minimalist</p>
//          <li> <a href="/projects" > Explore Our Projects </a> </li>
//         </div>
//       </div> 



//        {/* <section className="why-choose-us">
//       <h2>Why Choose Us?</h2>
//       <div className="scroll-wrapper">
//         <div className="scroll-container">
//           {[...features, ...features].map((item, index) => (
//             <div className="feature-card" key={index}>
//               <span className="icon">{item.icon}</span>
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
              
//             </div>
//           ))}
//     </div>
//   </div>
// </section> */}


//       <AddProject />
//        <Services />  

      

//       <section className="testimonials">
//               <h2>What Our Clients Say</h2>
//               <div className="testimonial-cards">
//                 <div className="testimonial">
//                   <p>"Amazing design! Transformed my home beautifully."</p>
//                   <h4>- Ravi Kumar</h4>
//                 </div>
//                 <div className="testimonial">
//                   <p>"Professional team, great service. Highly recommended!"</p>
//                   <h4>- Sneha Reddy</h4>
//                 </div>
//               </div>
//       </section>

//       <Projects/>
//       <About />
//       <Contact />
//       <Footer />

    
    

//     </div>
//   )
// }

// export default Home



// import React from "react";

// const Home = ({ setActivePage }) => {
//   return (
//     <section id="home" className="page-section active">
//       <div className="hero">
//         <div className="hero-content">
//           <h1>Transform Your Space</h1>
//           <p>Premium Interior Design Solutions for Modern Living</p>
//           <button
//             className="cta-button"
//             onClick={() => setActivePage("contact")}
//           >
//             Get Started Today
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import WhyChoose from './WhyChoose';
// import Services from './Services';
// import Contact from './Contact';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="page-section active">
//       <div className="hero">

//         {/* 🔥 Background Video */}
//         <video
//           className="background-video"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/images/new-intro.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* 🔥 Overlay for Stylish Dark Effect */}
//         <div className="overlay"></div>

//         {/* 🔥 Content on Top of Video */}
//         <div className="hero-content">
//           <h1 className="hero-title">Transforming Spaces Into Masterpieces</h1>
//           <p className="hero-subtitle">
//            Modern | Elegant | Minimalist
//           </p>
//           <button 
//             className="cta-button"
//             onClick={() => navigate('/contact')}
//           >
//             Get Started Today
//           </button>
//         </div>
//       </div>

//       {/* Other Sections */}
//       <WhyChoose />
//       <Services />
//       <Contact />
//     </section>
//   );
// };

// export default Home;












import React from 'react'
import Navbar from '../components/Navbar'
import WhyChoose from './WhyChoose'
import Services from './Services'
import About from './About'
import Project2 from './Project2'

const Home = () => {

  return (
    <div>
      <Navbar />
     <div className="home-container">
  <video
    className="home-intro-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/images/home-intro.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video> 

  

  <div className="overlay" />
  <div className="video-text">
    <h1>Transforming Spaces into Masterpieces</h1>
    <p>Modern | Elegant | Minimalist</p>
    <li><a href="/contact">Get in Touch With Us</a></li>
  </div>
</div>
 




   
      <WhyChoose />
      <Project2 />
      
      <Services />
      <About />
      
    

    </div>
  )
}

export default Home
