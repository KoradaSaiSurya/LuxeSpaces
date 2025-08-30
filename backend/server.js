import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import path from "path";
import Project from "./models/Project.js";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/interiorDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Static folder for images
app.use("/uploads", express.static("uploads"));

// API to add project
app.post("/api/projects", upload.single("image"), async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProject = new Project({
      name,
      price,
      imageUrl: `http://localhost:5000/uploads/${req.file.filename}`
    });
    await newProject.save();
    res.json({ success: true, project: newProject });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

// Get all projects
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
