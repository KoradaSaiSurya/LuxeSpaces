


import React from 'react'
import Navbar from '../components/Navbar'
import WhyChoose from './WhyChoose'
import Services from './Services'
import About from './About'
import Project2 from './Project2'
import SEO from '../components/SEO'

const Home = () => {

  return (
    <>

    
       {/* SEO meta tags */}
      <SEO
        title="LuxeSpaces - Best Interiors in Tuni"
        description="LuxeSpaces — Best interior designers for living rooms, bedrooms, and kitchens."
        image="https://luxe-spaces.vercel.app/images/home-hero.jpg"
        keywords="interior designers tuni, home interiors tuni, LuxeSpaces tuni"
      />

    <div>



      <Navbar />
     <div className="home-container">
  

  <img 
  className="home-intro-video" 
  src="/images/intro-img-6.png" 
  alt="Interior Design Intro" 
/>


  

  <div className="overlay" />
  <div className="video-text">
    <h1> LuxeSpaces</h1>
    <p>Elevate Your living Space</p>
    <li><a href="/contact">Get in Touch With Us</a></li>
  </div>
</div>
 




   
      <WhyChoose />
      <Project2 />
      
      <Services />
      <About />
      
    

    </div>
    </>
  )
}

export default Home
