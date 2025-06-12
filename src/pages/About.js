import React from 'react';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-tagline">Design is not just what it looks like... It's how it makes you feel.</p>

        <div className="about-content">
          <p>
            At <strong>DreamSpace Interiors</strong>, we believe that every home has a story. Our mission is to craft 
            stunning interiors that reflect your personality, lifestyle, and dreams. Whether it’s a cozy bedroom, a 
            modern kitchen, or a luxurious living room, we bring your imagination to life with passion and precision.
          </p>

          <p>
            Our team of expert designers and architects work hand-in-hand with you, from concept to creation. With over 
            <strong> 10+ years of experience</strong> and a portfolio of 100+ completed projects, we take pride in 
            transforming empty spaces into vibrant, functional, and aesthetic environments.
          </p>

          <p>
            We focus on <strong>quality materials</strong>, <strong>attention to detail</strong>, and a <strong>seamless experience</strong> from design to delivery. 
            Your satisfaction is our biggest reward.
          </p>

          <div className="about-highlights">
            <div className="highlight-box">
              <h2>100+ Projects</h2>
              <p>Successfully delivered dream homes</p>
            </div>
            <div className="highlight-box">
              <h2>10+ Years</h2>
              <p>Of design experience</p>
            </div>
            <div className="highlight-box">
              <h2>4.9 ★ Rating</h2>
              <p>From happy clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
