from flask import Flask, request, jsonify,render_template
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.efficientnet import preprocess_input
import os
from werkzeug.utils import secure_filename

# === Initialize Flask App ===
app = Flask(__name__)
CORS(app)  # allow cross-origin requests (from React or Express)

# === Load model once ===
print("✅ Loading model...")
model = load_model("model/breed_model.keras", custom_objects={'preprocess_input': preprocess_input})
print("✅ Model loaded successfully!")

# === Class names (must match your training order) ===
class_names = ['Ayrshire cattle', 'Brown Swiss cattle', 'Holstein Friesian cattle', 'Jersey cattle', 'Red Dane cattle']

# === Create uploads folder if not exists ===
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# === Prediction Route ===
@app.route('/',methods=["GET"])
def home():
    return render_template('index.html')
@app.route("/predict", methods=["POST"])
def predict():
    try:
        if "image" not in request.files:
            return jsonify({"error": "No image uploaded"}), 400

        file = request.files["image"]
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(file_path)

        # Preprocess the image
        img = image.load_img(file_path, target_size=(224, 224))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array = preprocess_input(img_array)

        # Predict
        predictions = model.predict(img_array)
        predicted_class = class_names[np.argmax(predictions[0])]
        confidence = float(np.max(predictions[0]) * 100)

        # Remove uploaded file (optional)
        os.remove(file_path)

        return jsonify({
            "predicted_breed": predicted_class,
            "confidence": confidence
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# === Run Server ===
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
