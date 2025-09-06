import React, { useState } from 'react';
import axios from 'axios';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [popup, setPopup] = useState({ show: false, type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
  "https://interior-backend-1.onrender.com/api/contact",
  formData
);

      
      setPopup({ show: true, type: 'success', message: res.data.message || '✅ Message Sent Successfully!' });

      // reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setPopup({ show: true, type: 'error', message: '❌ Message Failed to Send. Try again!' });
    }

    // auto-close popup after 3 sec
    setTimeout(() => {
      setPopup({ show: false, type: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', title: 'Address', content: '123 Design Street, Creative District\nNew York, NY 10001' },
    { icon: 'fas fa-phone', title: 'Phone', content: '+1 (555) 123-4567' },
    { icon: 'fas fa-envelope', title: 'Email', content: 'hello@luxespaces.com' },
    { icon: 'fas fa-clock', title: 'Business Hours', content: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM' }
  ];

  return (
     <>
      <SEO
        title="Contact Us"
        description="Get in touch with LuxeSpaces for your dream interior projects."
        image="https://luxe-spaces.vercel.app/images/contact-hero.jpg"
        keywords="contact LuxeSpaces, interior designers contact, LuxeSpaces phone email"
      />
    <section className="page-section active">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Ready to transform your space? Contact us today for a free consultation</p>
        </div>

        {/* ✅ Popup */}
        {popup.show && (
          <div className={`popup ${popup.type}`}>
            {popup.message}
          </div>
        )}

        <div className="contact-container">
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  style={{ padding: '12px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem', resize: 'vertical', fontFamily: 'inherit' }}
                  required
                />
              </div>
              <button type="submit" className="upload-btn">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Contact Information</h3>
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <i className={info.icon}></i>
                <div>
                  <h4>{info.title}</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{info.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
