from flask import Flask, request, jsonify,render_template
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

@app.route('/')
def home():
    return render_template("index.html")
@app.route('/predict', methods=['POST'])
def predict():
    # Placeholder for your actual logic
    print('bhghjuhjkkjk')
    predicted_class = "Golden Retriever"
    confidence = 0.97

    return jsonify({
        "predicted_breed": predicted_class,
        "confidence": confidence
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
