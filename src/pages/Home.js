import React from 'react'
import Navbar from '../components/Navbar'
import Projects from './Projects';
import Footer from '../components/Footer';
import Services from './Services';
import Contact from './Contact';
import About from './About';

const Home = () => {
   const features = [
    { icon: <img src="/images/creative-design.png" alt="Creative Design" className="feature-icon" />,  title: "Creative Designs", desc: "Unique and elegant interior themes tailored for you." },
    { icon: <img src="/images/price.png" alt="Creative Design" className="feature-icon" />, title: "Affordable Pricing",   desc: "High-quality designs that suit your budget." },
    { icon: <img src="/images/delivery.png" alt="Creative Design" className="feature-icon" />, title: "On-Time Delivery",   desc: "Timely completion of all projects guaranteed." },
    { icon: <img src="/images/happy.png" alt="Creative Design" className="feature-icon" />,  title: "Happy Clients",  desc: "200+ clients satisfied with our work." },
  ];

  return (
    <div>
      <Navbar />

      <div className="home-container">
        <img className="intro-video" 
          source src='/images/livingroom.jpg' alt="intro" />
        <div className="overlay" />
        <div className="video-text">
          <h1>Transforming Spaces into Masterpieces</h1>
          <p>Modern | Elegant | Minimalist</p>
         <li> <a href="/projects" > Explore Our Projects </a> </li>
        </div>
      </div>


       <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="scroll-wrapper">
        <div className="scroll-container">
          {[...features, ...features].map((item, index) => (
            <div className="feature-card" key={index}>
              <span className="icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              
            </div>
          ))}
    </div>
  </div>
</section>

       <Services />    
      

      <section className="testimonials">
              <h2>What Our Clients Say</h2>
              <div className="testimonial-cards">
                <div className="testimonial">
                  <p>"Amazing design! Transformed my home beautifully."</p>
                  <h4>- Ravi Kumar</h4>
                </div>
                <div className="testimonial">
                  <p>"Professional team, great service. Highly recommended!"</p>
                  <h4>- Sneha Reddy</h4>
                </div>
              </div>
      </section>

      <Projects/>
      <About />
      <Contact />
      <Footer />

    
    

    </div>
  )
}

export default Home

