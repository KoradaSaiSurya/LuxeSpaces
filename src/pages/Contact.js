// import React from 'react';

// const Contact = () => {
//   return (
//     <div className='contact'> 
//     <div className="contact-box">
//       <h2>Contact Us</h2>
//       <p><strong>Name:</strong> Korada Sai Surya</p>
//       <p><strong>Email:</strong> saisuryakorada2003@gmail.com</p>
//       <p><strong>Phone:</strong> +91 90144 *****</p>
//       <p><strong>Location:</strong> Andhra Pradesh, India</p>
//     </div>
//     </div>
//   );
// };

// export default Contact;



// import React, { useState } from "react";

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thanks ${form.name}, we will contact you soon!`);
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <section id="contact" className="page-section">
//       <h2>Contact Us</h2>
//       <div className="contact-container">
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
//           <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
//           <textarea placeholder="Your Message" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} required></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//         <div className="contact-info">
//           <p>📍 Address: Hyderabad, India</p>
//           <p>📞 Phone: +91 98765 43210</p>
//           <p>📧 Email: contact@luxespaces.com</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;






import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    alert(`Thank you ${formData.name}! Your message has been sent. We'll get back to you soon at ${formData.email}.`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      content: '123 Design Street, Creative District\nNew York, NY 10001'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      content: '+1 (555) 123-4567'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'hello@luxespaces.com'
    },
    {
      icon: 'fas fa-clock',
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM'
    }
  ];

  return (
    <section className="page-section active">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Ready to transform your space? Contact us today for a free consultation</p>
        </div>
        <div className="contact-container">
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  style={{
                    padding: '12px',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
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
  );
};

export default Contact;