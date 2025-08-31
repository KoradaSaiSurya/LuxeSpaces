// import React from 'react';

// const servicesData = [
//   {
//     title: 'TV Unit ',
//     description: 'Wall-mounted sleek TV panel with cabinets and LED lights.',
//     image: '/images/tv1.jpg',
//     price: '₹ 70,000',
//   },
//   {
//     title: 'Office',
//     description: 'Comfortable workspace with desk, chair, and bookshelves for productivity.',
//     image: '/images/office.jpg',
//     price: '₹ 80,000',
//   },
//   {
//     title: 'Kids room',
//     description: 'Peaceful bedrooms with ambient lighting and beautiful wardrobes.',
//     image: '/images/kidsroom.jpg',
//     price: '₹ 85,000',
//   },
//   {
//     title: 'Wardrobe',
//     description: 'Sliding wardrobe with mirror, shelves and internal lights.',
//     image: '/images/kidsroom.jpg',
//     price: '₹ 65,000',
//   },
//   {
//     title: 'Balcony',
//     description: 'Cozy balcony with garden chairs, plants and hanging lights.',
//     image: '/images/balcony.jpg',
//     price: '₹ 40,000',
//   },
//   {
//     title: 'Dining Area',
//     description: ' Elegant 6-seater dining table with modern lighting and backdrop.',
//     image: '/images/dining.jpg',
//     price: '₹ 85,000',
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="services-section-1">
//       <h1 className="main-heading1">Top Projects</h1>
//       <p className="subtitle1">Explore Our</p>
//       <p className="para">
//         These projects represent our commitment to delivering stunning interiors that blend functionality with beauty.
//         Each design is a result of thoughtful planning, skilled execution, and a deep understanding of your lifestyle.
//       </p>

//       <div className="pro">
//         {servicesData.map((service, index) => (
//           <div key={index} className="images">
//             <div className="image-box">
//               <img className="img" src={service.image} alt={service.title} />
//             </div>
//             <div className="text-box1">
//               <h2>{service.title}</h2>
//               <p>{service.description}</p>
//               <h3 style={{ color: 'black', fontSize: '25px' }}>{service.price}</h3>
//             </div>
//             <div className="card-number">{index + 1}</div> 
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;






// import React, { useState, useEffect } from "react";

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
//     setProjects(savedProjects);
//   }, []);

//   const handleUpload = (e) => {
//     e.preventDefault();
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = () => {
//       const newProject = {
//         id: Date.now(),
//         name: file.name,
//         url: reader.result
//       };
//       const updatedProjects = [...projects, newProject];
//       setProjects(updatedProjects);
//       localStorage.setItem("projects", JSON.stringify(updatedProjects));
//       setFile(null);
//     };
//     reader.readAsDataURL(file);
//   };

//   const removeProject = (id) => {
//     const updatedProjects = projects.filter((p) => p.id !== id);
//     setProjects(updatedProjects);
//     localStorage.setItem("projects", JSON.stringify(updatedProjects));
//   };

//   return (
//     <section id="projects" className="page-section">
//       <h2>Our Projects</h2>
//       <form className="upload-form" onSubmit={handleUpload}>
//         <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
//         <button type="submit">Upload Project</button>
//       </form>

//       <div className="projects-grid">
//         {projects.map((project) => (
//           <div key={project.id} className="project-card">
//             <img src={project.url} alt={project.name} />
//             <p>{project.name}</p>
//             <button onClick={() => removeProject(project.id)}>Remove</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;






// import React, { useState } from 'react';


// const Projects = ({ projects, onAddProject, onProjectSubmit, isAuthenticated }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     price: '',
//     image: null,
//     imagePreview: null
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setFormData(prev => ({
//           ...prev,
//           image: e.target.result,
//           imagePreview: e.target.result
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (!onAddProject()) {
//       return; // Password modal will be shown
//     }

//     if (formData.name && formData.price) {
//       onProjectSubmit({
//         name: formData.name,
//         price: parseInt(formData.price),
//         image: formData.image,
//         description: 'Custom interior design project'
//       });

//       // Reset form
//       setFormData({
//         name: '',
//         price: '',
//         image: null,
//         imagePreview: null
//       });

//       // Show success message
//       showSuccessMessage('Project added successfully and will be visible to everyone!');
//     }
//   };

//   const showSuccessMessage = (message) => {
//     // Create success notification
//     const notification = document.createElement('div');
//     notification.style.cssText = `
//       position: fixed;
//       top: 100px;
//       right: 20px;
//       background: #4CAF50;
//       color: white;
//       padding: 15px 20px;
//       border-radius: 8px;
//       box-shadow: 0 4px 12px rgba(0,0,0,0.2);
//       z-index: 10000;
//       font-weight: bold;
//       animation: slideIn 0.3s ease;
//     `;
//     notification.textContent = message;
    
//     document.body.appendChild(notification);
    
//     setTimeout(() => {
//       if (notification.parentNode) {
//         notification.parentNode.removeChild(notification);
//       }
//     }, 3000);
//   };

//   return (
//     <section className="page-section active">
//       <div className="container">
//         <div className="section-header">
//           <h2>Our Projects</h2>
//           <p>Explore our portfolio of stunning interior design transformations</p>
//         </div>
        
//         {/* Project Upload Form */}
//         <div className="project-upload">
//           <h3>Add New Project</h3>
//           <form className="upload-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="projectName">Project Name</label>
//               <input
//                 type="text"
//                 id="projectName"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="projectPrice">Price ($)</label>
//               <input
//                 type="number"
//                 id="projectPrice"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Upload Image</label>
//               <div className="file-upload-wrapper">
//                 <input
//                   type="file"
//                   id="projectImage"
//                   className="file-upload-input"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                 />
//                 <div className="file-upload-button">
//                   <i className="fas fa-cloud-upload-alt"></i>
//                   <span>{formData.imagePreview ? 'Image Selected' : 'Choose Image File'}</span>
//                 </div>
//                 {formData.imagePreview && (
//                   <div className="image-preview" style={{ display: 'block' }}>
//                     <img src={formData.imagePreview} alt="Preview" />
//                   </div>
//                 )}
//               </div>
//             </div>
//             <button type="submit" className="upload-btn">Add Project</button>
//           </form>
//         </div>

//         {/* Projects Grid */}
//         <div className="projects-grid">
//           {projects.map((project) => (
//             <div key={project.id} className="project-card">
//               <div className="project-image">
//                 {project.image ? (
//                   <img 
//                     src={project.image} 
//                     alt={project.name}
//                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                   />
//                 ) : (
//                   <i className="fas fa-image"></i>
//                 )}
//               </div>
//               <div className="project-info">
//                 <h3>{project.name}</h3>
//                 <p className="project-price">${project.price.toLocaleString()}</p>
//                 <p>{project.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




import React, { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");

  // Render backend URL
  const BACKEND_URL = "https://interior-backend-1.onrender.com"; // <-- replace with your Render URL if different

  // Fetch projects
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  // Upload project
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("price", price);
    formData.append("content", content);

    try {
      const res = await fetch(`${BACKEND_URL}/api/projects`, {
        method: "POST",
        body: formData,
      });
      const newProject = await res.json();
      setProjects([...projects, newProject]);
      setFile(null);
      setPrice("");
      setContent("");
    } catch (err) {
      console.log(err);
      alert("Upload failed");
    }
  };

  // Delete project
  const handleDelete = async (id) => {
    try {
      await fetch(`${BACKEND_URL}/api/projects/${id}`, { method: "DELETE" });
      setProjects(projects.filter((p) => p._id !== id));
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="pro">
      <div style={{ width: "80%", margin: "auto" }}>
        <form onSubmit={handleUpload} style={{ margin: "20px 0", textAlign: "center" }}>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit">Upload</button>
        </form>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {projects.map((p) => (
            <div
              key={p._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={`${BACKEND_URL}${p.imageUrl}`}
                alt="uploaded"
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h3>₹{p.price}</h3>
              <p>{p.content}</p>
              <button
                onClick={() => handleDelete(p._id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
