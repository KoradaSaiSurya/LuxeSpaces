import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ navigation

function Projects() {
  const [projects, setProjects] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [lightbox, setLightbox] = useState({ open: false, imgUrl: "" });

  const BACKEND_URL = "https://interior-backend-1.onrender.com";
  const navigate = useNavigate(); // ✅ navigation hook

  // ✅ Fetch projects
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  // ✅ Upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("price", Number(price));
    formData.append("content", content);

    try {
      const res = await fetch(`${BACKEND_URL}/api/projects`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json();
        alert("Upload failed: " + errData.message);
        return;
      }

      const newProject = await res.json();
      setProjects([...projects, newProject]);

      // reset form
      setFile(null);
      setTitle("");
      setPrice("");
      setContent("");
    } catch (err) {
      console.log(err);
      alert("Upload failed: " + err.message);
    }
  };

  // ✅ Delete
  const handleDelete = async (id) => {
    try {
      await fetch(`${BACKEND_URL}/api/projects/${id}`, {
        method: "DELETE",
      });
      setProjects(projects.filter((p) => p._id !== id));
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  // ✅ Lightbox
  const openLightbox = (imgUrl) => setLightbox({ open: true, imgUrl });
  const closeLightbox = () => setLightbox({ open: false, imgUrl: "" });

  return (
    <div className="projects-container">
      {/* Heading + Back Button */}
      <div className="header-row">
        <button className="back-btn" onClick={() => navigate("/project2")}>
          ⤶ 
        </button>
        <h1 className="main-heading">✨ Add Projects ✨</h1>
      </div>

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

              {/* Delete Button */}
              <button
                className="luxe-btn"
                onClick={() => handleDelete(p._id)}
              >
                Luxe Spaces
              </button>
            </div>
          </div>
        ))}
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

      {/* Upload Form */}
      <form className="upload-form" onSubmit={handleUpload}>
        <h2 className="form-title">Add New Product</h2>
        <div className="form-grid">
          <div className="form-group">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Description"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              placeholder="Price (₹)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn-upload">
          Upload Product
        </button>
      </form>
    </div>
  );
}

export default Projects;
