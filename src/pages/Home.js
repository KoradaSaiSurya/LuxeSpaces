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
            <h1>LuxeSpaces</h1>
            <p>Elevate Your Living Space</p>
            <li><a href="/contact">Get in Touch With Us</a></li>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="seo-content" style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto", lineHeight: "1.7", fontSize: "16px" }}>
          <h2 style={{textAlign: "center"}}>Welcome to LuxeSpaces – Interior Designers in Tuni</h2>
          <p>
            At <strong>LuxeSpaces</strong>, we believe that your home and office should reflect your personality, style, and comfort. 
            Based in Tuni, our expert team of interior designers transforms ordinary spaces into elegant, functional, and modern environments. 
            Whether you are looking to renovate your <strong>living room, bedroom, kitchen, or office interiors</strong>, LuxeSpaces delivers tailor-made 
            solutions that bring your vision to life.
          </p>

          <p>
            Our designs focus on combining aesthetics with practicality. From modern minimalistic interiors to luxury and traditional themes, 
            we provide end-to-end solutions including space planning, furniture selection, lighting, and décor styling. 
            We ensure that every project is unique, affordable, and completed with high-quality craftsmanship.
          </p>

          <p>
            LuxeSpaces has become one of the <strong>best interior design companies in Tuni</strong> because of our commitment to customer satisfaction. 
            We work closely with clients to understand their lifestyle and requirements before creating designs that perfectly fit their needs. 
            Our mission is to transform every corner into a space that inspires comfort, beauty, and functionality.
          </p>

          <p>
            Looking for <strong>home interiors in Tuni</strong>? LuxeSpaces is your trusted partner for creative and reliable design solutions. 
            Get in touch with us today and let us help you elevate your living space with professional interior design services.
          </p>
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
