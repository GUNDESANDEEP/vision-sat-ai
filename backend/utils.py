# utils.py

def format_detection_result(result):
    return f"""
📁 Filename: result.jpg
🌍 Feature Detected: {result['feature_type']}
📐 Estimated Area: {result['area_km2']} km²
📊 Confidence: {result['confidence']}%
📦 Status: success
"""
