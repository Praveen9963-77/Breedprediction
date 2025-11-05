
import React, { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    if (!file) {
      alert("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("http://localhost:4000/api/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      console.log("✅ Response:", data);
      setResult(data);
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Prediction failed. Check backend or console.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Cow Breed Recognition 🐄</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <button onClick={handlePredict} style={{ marginTop: "10px" }}>
        Predict
      </button>

      {result && (
        <div>
          <h3>Prediction Result</h3>
          <p>Breed: {result.predicted_breed}</p>
          <p>Confidence: {result.confidence?.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
