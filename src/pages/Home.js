


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
  )
}

export default Home
