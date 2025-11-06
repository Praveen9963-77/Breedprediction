
import express from 'express';
import fetch from 'node-fetch';
import FormData from 'form-data';
import fileUpload from 'express-fileupload';
import cors from 'cors';
const app = express();
app.use(fileUpload());
app.use(cors());
app.post("/api/predict", async (req, res) => {
  try {
    if (!req.files || !req.files.image) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const formData = new FormData();
    formData.append("image", req.files.image.data, req.files.image.name);

    const response = await fetch("https://breedprediction-3.onrender.com/predict", {
      method: "POST",
      body: formData,
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return res.status(502).json({ error: "Invalid response from Flask", raw: text });
    }

    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
