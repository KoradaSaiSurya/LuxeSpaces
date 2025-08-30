import React, { useState } from "react";
import axios from "axios";

const AddProject = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [projects, setProjects] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !image) {
      alert("Please fill all fields!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/api/projects", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setProjects([...projects, res.data.project]);
      setName("");
      setPrice("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Error adding project!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        /><br /><br />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        /><br /><br />
        <button type="submit">Add Project</button>
      </form>

      <h3>Projects List</h3>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {projects.map((proj) => (
          <div key={proj._id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={proj.imageUrl} alt={proj.name} width="150" />
            <h4>{proj.name}</h4>
            <p>₹{proj.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddProject;
