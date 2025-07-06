from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import sys

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/")
def home():
    return "✅ Flask is running!"

@app.route("/api/detect-upload", methods=["POST"])
def detect_upload():
    if 'image' not in request.files:
        print("❌ No image in request")
        sys.stdout.flush()
        return jsonify({"error": "No image uploaded"}), 400

    image = request.files['image']
    feature_type = request.form.get("type", "unknown")
    image_path = os.path.join(UPLOAD_FOLDER, image.filename)
    image.save(image_path)

    print(f"📥 Received: {image.filename}")
    print(f"📌 Feature: {feature_type}")
    sys.stdout.flush()

    return jsonify({
        "status": "success",
        "filename": image.filename,
        "feature": feature_type
    })

if __name__ == "__main__":
    print("🚀 Starting Flask...")
    sys.stdout.flush()
    app.run(debug=True)
