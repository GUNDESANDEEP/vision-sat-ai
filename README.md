\# 🚀 VisionSat AI – Satellite Feature Detection Platform



\*\*VisionSat AI\*\* is an AI-powered web application that allows users to upload satellite images and automatically detect key features like \*\*glacial lakes\*\*, \*\*road networks\*\*, and \*\*urban drainage systems\*\*. Built using the MERN + Flask stack with integrated geospatial display.



---



\## 🔍 Features



\- 📂 Upload satellite images (JPG, PNG)

\- 🧠 Select feature type: Glacial Lake, Road, Drainage

\- 🖼 Image preview before detection

\- 📊 Estimated detection data (area, confidence)

\- 🌍 Interactive map (Leaflet.js) to view detected location



---



\## 🛠️ Tech Stack



| Frontend        | Backend         | Others            |

|------------------|------------------|--------------------|

| React (Create React App) | Python Flask API  | Leaflet.js for map |

| Axios (API calls)        | CORS, Upload Handling | Bootstrap (optional) |

| HTML, CSS        | NumPy, OpenCV (future) | GitHub, VS Code   |



---



\## 📸 Demo



> Upload an image → Choose a type → See detection summary and location on the map.



!\[Demo Screenshot](./screenshots/demo.png)



---



\## 🚀 Getting Started



```bash

\# Step 1: Clone the repo

git clone https://github.com/GUNDESANDEEP/vision-sat-ai.git

cd vision-sat-ai



\# Step 2: Backend Setup

cd backend

py -m pip install flask flask-cors

py app.py  # Starts Flask server at localhost:5000



\# Step 3: Frontend Setup

cd ../frontend

npm install

npm start   # Starts React app at localhost:3000

&nbsp;



📁 Project Structure

css

Copy code

vision-sat-ai/

├── backend/

│   └── app.py

├── frontend/

│   ├── src/

│   │   ├── App.js

│   │   ├── MapView.js

│   │   └── api.js

├── README.md

└── .gitignore

🤖 Upcoming Features

🧠 Integrate real ML/OpenCV detection



📍 Auto-fetch coordinates using EXIF/GIS data



📄 Export PDF or JSON detection report



🕵️ Detection history view



🙌 Author

Gunde Sandeep

📍 Warangal, Telangana

🔗 GitHub



📜 License

This project is open-source and available under the MIT License.



yaml

Copy code



---



\### 🔹 3. Save \& Close the file



---



\### 🔹 4. Commit the README



```bash

git add README.md

git commit -m "📝 Added README with project overview"

git push origin main



