
import express from "express";
import multer from "multer";
import fetch from "node-fetch"; // if using Node < 18
import cors from "cors";
import fs from "fs";
import FormData from "form-data"; // ⬅️ important: you missed this import

const app = express();
app.use(cors());

// setup multer for file uploads
const upload = multer({ dest: "uploads/" });

app.post("/api/predict", upload.single("image"), async (req, res) => {
  try {
    const filePath = req.file.path;

    // create form data for Flask server
    const formData = new FormData();
    formData.append("image", fs.createReadStream(filePath));

    // send image to Flask backend
    const response = await fetch("https://breedprediction-3.onrender.com/predict", {
      method: "POST",
      body: formData,
      headers: formData.getHeaders(), // ⬅️ required when using form-data
    });
    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(4000, () => console.log("✅ Express running on port 4000"));
