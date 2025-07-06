import React, { useState } from "react";
import { detectFeature } from "./api";

function App() {
  const [image, setImage] = useState(null);
  const [type, setType] = useState("Glacial Lake");
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    if (!image) return alert("Upload image first!");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("type", type);

    try {
      const res = await detectFeature(formData);
      setResponse(res);
    } catch (err) {
      alert("❌ Network Error");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🔷 VisionSat AI – Upload Detection</h2>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <br /><br />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Glacial Lake</option>
        <option>Road Network</option>
        <option>Urban Drainage</option>
      </select>
      <br /><br />
      <button onClick={handleSubmit}>🚀 Run Detection</button>

      {response && (
        <div>
          <h3>✅ Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
