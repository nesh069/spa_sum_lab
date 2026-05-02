import { useState } from "react";
import ProjectList from "../components/ProjectList";
import AddProjectForm from "../components/AddProjectForm";

function Home({ projects, addProject }) {
  const [search, setSearch] = useState("");

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <main className="page">
      <h1 className="page-title">
        Personal Project <span className="accent">Showcase</span>
      </h1>
      <AddProjectForm onAdd={addProject} />
      <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input
          className="search-bar"
          type="text"
          placeholder="Search Projects"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <p className="projects-meta">
        Showing <span>{filtered.length}</span> of <span>{projects.length}</span> projects
        {search && ` for "${search}"`}
      </p>
      <ProjectList projects={filtered} />
    </main>
  );
}

export default Home;