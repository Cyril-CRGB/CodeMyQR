# Tech used
React + FastAPI

command from cd frontend : 
- npm run dev -- --host
command from cd backend : 
- (pip install fastapi uvicorn pillow qrcode python-multipart) eventually
- uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Step 1: Set Up the Project Structure
qr-generator/
├── backend/     ← FastAPI (Python)
└── frontend/    ← React (JavaScript)

# Step 2: Initialize the Backend (FastAPI)
### A. In the backend/ folder, create and activate a virtual environment
mkdir qr-generator
cd qr-generator
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
mkdir backend
cd backend

### B. Install FastAPI and Uvicorn:
pip install fastapi uvicorn pillow qrcode python-multipart

### C. Create main.py inside backend/:

### D. Run the server:
uvicorn main:app --reload

# Step 3: Set Up the React Frontend (with Vite)
### A. Initialize React App (in a new folder)
Back in the root of the terminal (/workspaces/CodeMyQR/qr-generator), run:
- npm create vite@latest frontend -- --template react
- cd frontend
- npm install

This creates a basic React project using Vite.

### B. Test It Runs (locally in Codespaces)
npm run dev

# Step 4: Build the QR Code Generator UI in React
### A. Edit App.jsx
Replace the contents of frontend/src/App.jsx

### B. Update the Backend URL for Codespaces
https://8000-cyrilcrgb-codemyqr-uq0gu0mdn2k.ws-eu120.gitpod.io/generate

Update this line accordingly in the fetch() call.

### C. Save and Refresh

# Step 5: make it great
### A. Project Directory Structure
qr-generator/
├── backend/                   ← FastAPI API stays as is
└── frontend/
    ├── node_modules/
    ├── public/
    │   └── favicon.ico/svg
    ├── src/
    │   ├── assets/    
    │   │   └── react.svg  
    │   ├── components/        ← split the design into React components
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── Features.jsx
    │   │   ├── Demo.jsx
    │   │   ├── Footer.jsx
    │   │   └── AdBanner.jsx    ← placeholder for ads
    │   ├── App.jsx            ← puts all components together
    │   ├── App.css            ← all the CSS lives here                  
    │   └── main.jsx          
    ├── vite.config.js        ← add allowedHosts here 
    ├── index.html            ← base HTML template
    ├── package-lock.json
    ├── eslint.config.js
    ├── .gitignore
    └── package.json


### B. frontend/index.html
In frontend/index.html, drop in the <head> boilerplate—meta tags, <title>, the <style> for the animated grid, floating shapes CSS, Google Fonts link, etc. Everything that only runs once (not dynamic) goes here.

### C. src/App.css
Create frontend/src/App.css and paste all of the CSS (from <style> in the static file), minus the <style> tag itself

### D. Third-party scripts (ads, analytics)
drop in an external snippet (e.g. [Google AdSense](https://adsense.google.com/intl/fr_fr/start/)), the recommended way is:

- In React, use the react-helmet package (or Vite’s [index.html <script> injection][1]) to inject it into the document head.
npm install react-helmet
