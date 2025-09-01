import React, { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [pendingAction, setPendingAction] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [lightbox, setLightbox] = useState({ open: false, imgUrl: "" });

  const BACKEND_URL = "https://interior-backend-1.onrender.com";
  const SECRET_PASSWORD = "admin123";

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");
    setPendingAction("upload");
    setShowPasswordModal(true);
  };

  const confirmUpload = async () => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
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
      setTitle("");
      setPrice("");
      setContent("");
    } catch (err) {
      console.log(err);
      alert("Upload failed");
    }
  };

  const handleDelete = (id) => {
    setPendingAction("delete");
    setDeleteId(id);
    setShowPasswordModal(true);
  };

  const confirmDelete = async () => {
    try {
      await fetch(`${BACKEND_URL}/api/projects/${deleteId}`, {
        method: "DELETE",
      });
      setProjects(projects.filter((p) => p._id !== deleteId));
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  const handlePasswordSubmit = () => {
    if (password === SECRET_PASSWORD) {
      if (pendingAction === "upload") confirmUpload();
      if (pendingAction === "delete") confirmDelete();
      setShowPasswordModal(false);
      setPassword("");
      setPendingAction(null);
    } else {
      alert("❌ Incorrect Password!");
    }
  };

  const closeModal = () => {
    setShowPasswordModal(false);
    setPassword("");
    setPendingAction(null);
    setDeleteId(null);
  };

  const openLightbox = (imgUrl) => setLightbox({ open: true, imgUrl });
  const closeLightbox = () => setLightbox({ open: false, imgUrl: "" });

  return (
    <div className="projects-container">
      <h1 className="main-heading">✨ Our Projects ✨</h1>

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
              <p className="product-desc">{p.content}  </p>
              <div className="product-rating">⭐⭐⭐⭐⭐</div>
              <div className="product-price">₹{p.price.toLocaleString()}</div>
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

      {/* Password Modal */}
      {showPasswordModal && (
        <div
          className="modal-overlay show"
          onClick={(e) =>
            e.target === e.currentTarget && closeModal()
          }
        >
          <div className="modal-content">
            <h3>🔐 Admin Access Required</h3>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="modal-buttons">
              <button className="btn-confirm" onClick={handlePasswordSubmit}>
                Confirm
              </button>
              <button className="btn-cancel" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox.open && (
        <div className="image-modal" onClick={closeLightbox}>
          <img src={lightbox.imgUrl} alt="Project" />
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
