import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import "./styles/global.css";

const initialProjects = [
  {
    id: 1,
    title: "Song Finder App",
    description: "A music search web app using the Last.fm API to find songs, artists, and albums in real time.",
    tech: ["HTML", "CSS", "JavaScript", "Last.fm API"],
    github: "https://github.com/nesh069/Song_Finder_Project",
    live: "https://nesh069.github.io/Song_Finder_Project",
    category: "Web App",
    image: "🎵",
  },
  {
    id: 2,
    title: "Foodies Foods Restaurant",
    description: "A multi-page restaurant website with reservation forms, food cards, and vibrant CSS styling.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nesh069",
    live: "",
    category: "Website",
    image: "🍽️",
  },
  {
    id: 3,
    title: "JavaScript Calculator",
    description: "A functional calculator built with vanilla JavaScript, covering all core arithmetic operations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nesh069",
    live: "",
    category: "Tool",
    image: "🧮",
  },
];

function App() {
  const [projects, setProjects] = useState(initialProjects);

  const addProject = (newProject) => {
    const project = { ...newProject, id: Date.now() };
    setProjects((prev) => [project, ...prev]);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home projects={projects} addProject={addProject} />} />
          <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
