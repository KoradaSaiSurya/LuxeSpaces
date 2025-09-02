// import React, { useState } from "react";
// import axios from "axios";

// const AddProject = () => {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState(null);
//   const [projects, setProjects] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !price || !image) {
//       alert("Please fill all fields!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("price", price);
//     formData.append("image", image);

//     try {
//       const res = await axios.post("http://localhost:5000/api/projects", formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });

//       setProjects([...projects, res.data.project]);
//       setName("");
//       setPrice("");
//       setImage(null);
//     } catch (err) {
//       console.error(err);
//       alert("Error adding project!");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Add Project</h2>
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <input
//           type="text"
//           placeholder="Project Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         /><br /><br />
//         <input
//           type="number"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         /><br /><br />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImage(e.target.files[0])}
//           required
//         /><br /><br />
//         <button type="submit">Add Project</button>
//       </form>

//       <h3>Projects List</h3>
//       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//         {projects.map((proj) => (
//           <div key={proj._id} style={{ border: "1px solid #ccc", padding: "10px" }}>
//             <img src={proj.imageUrl} alt={proj.name} width="150" />
//             <h4>{proj.name}</h4>
//             <p>₹{proj.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AddProject;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Project2() {
  const [projects, setProjects] = useState([]);
  const [lightbox, setLightbox] = useState({ open: false, imgUrl: "" });
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");

  const BACKEND_URL = "https://interior-backend-1.onrender.com";
  const SECRET_PASSWORD = "admin123"; // ✅ password
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  const openLightbox = (imgUrl) => setLightbox({ open: true, imgUrl });
  const closeLightbox = () => setLightbox({ open: false, imgUrl: "" });

  const handlePlusClick = () => {
    setShowPasswordModal(true);
  };

  const handlePasswordSubmit = () => {
    if (password === SECRET_PASSWORD) {
      setShowPasswordModal(false);
      setPassword("");
      navigate("/projects"); // ✅ navigate if password ok
    } else {
      alert("❌ Incorrect Password!");
    }
  };

  return (
    <div className="projects-container">
      <h1 className="main-heading">✨ Our Projects ✨</h1>
      <p className="project-p"> Discover our finest interior designs crafted with passion.
Each project blends creativity, comfort, and modern elegance.
We turn your dream spaces into a beautiful reality.</p>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p._id} className="product-card">
            <div
              className="product-image"
              onClick={() => openLightbox(p.imageUrl)}
            >
              <img src={p.imageUrl} alt={p.title} />
            </div>
            <div className="product-details">
              <p className="product-title">{p.title}</p>
              <p className="product-desc">{p.content}</p>
              <div className="product-rating">⭐⭐⭐⭐⭐</div>
              <div className="product-price">₹{p.price.toLocaleString()}</div>
              <button className="luxe-btn">Luxe Spaces</button>
            </div>
          </div>
        ))}

        {/* + Symbol Card with password */}
        <div className="product-card add-card" onClick={handlePlusClick}>
          <div className="plus-symbol">+</div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="modal-overlay" onClick={closeLightbox}>
          <div className="modal-image-box">
            <img
              src={lightbox.imgUrl}
              alt="Project"
              onClick={closeLightbox}
            />
          </div>
        </div>
      )}

      {/* Password Modal */}
      {showPasswordModal && (
        <div
          className="modal-overlay"
          onClick={(e) => e.target === e.currentTarget && setShowPasswordModal(false)}
        >
          <div className="modal-content">
            <h3>🔐 Enter Admin Password</h3>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="modal-buttons">
              <button className="btn-confirm" onClick={handlePasswordSubmit}>
                Confirm
              </button>
              <button
                className="btn-cancel"
                onClick={() => setShowPasswordModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project2;
