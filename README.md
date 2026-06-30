# Virat Kohli Electrical & Automation Solutions - Full-Stack Website

A premium, responsive corporate website built with a React + Vite frontend and a Node.js Express.js backend. This project features server-side validated contact inquiries that persist in a local JSON database, along with a custom theme manager (supporting Light & Dark modes) and Framer Motion layouts.

---

## 🚀 How to Run the Project Locally

### 1. Install Dependencies
Run npm install from the root folder to download all required packages for the workspace, client, and server:
```bash
npm install
npm run install:all
```

### 2. Start the Development Servers
Launch both the frontend client and backend server concurrently with a single command:
```bash
npm run dev
```
*   **Frontend Client:** [http://localhost:5173/](http://localhost:5173/) (watches and hot-reloads frontend code changes)
*   **Backend REST API:** [http://localhost:5000/](http://localhost:5000/) (watches and restarts server scripts using nodemon, ignoring database changes)

---

## 📁 Directory Layout

```text
Engg_Website/
├── package.json               # Root scripts to orchestrate processes
├── frontend/                  # React + Vite Client Application
│   ├── package.json
│   ├── vite.config.js         # Tailwind v4 configuration
│   └── src/
│       ├── components/        # Navbar, Footer, Hero, AboutOwner, WhyChooseUs, ServicesPreview
│       └── pages/             # Home, Services, Contact Pages
└── backend/                   # Node.js + Express.js API Server
    ├── package.json
    ├── server.js              # REST API endpoints & Validations
    └── data/
        └── inquiries.json     # JSON inquiries database file
```

---

## 🐙 How to Add & Push to GitHub

Since git permissions are managed on your system, please execute the following commands in your terminal (opened at the project root `d:\HARSH\Projects\Engg_Website`) to initialize git and push the code to your GitHub:

### 1. Initialize Git & Commit Files
```bash
# Initialize repository
git init

# Stage all files (will automatically respect the .gitignore exclusions)
git add .

# Create the initial commit
git commit -m "Initial commit - Fullstack Virat Kohli Electrical Solutions Website"
```

### 2. Link & Push to GitHub
Create a new **empty repository** on GitHub (do not initialize with README, license, or gitignore, as those are already in the project). Then, copy your repository URL and run:
```bash
# Rename active branch to main
git branch -M main

# Add your GitHub repository as the remote origin (replace URL with your own)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push the code to GitHub
git push -u origin main
```
