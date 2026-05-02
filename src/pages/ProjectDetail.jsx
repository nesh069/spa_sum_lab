import { useParams, Link } from "react-router-dom";

function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="not-found">
        <h2>Project not found 🤷</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
          This project doesn't exist or was removed.
        </p>
        <Link to="/" className="btn btn-primary">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Link to="/" className="back-btn">← Back to all projects</Link>
      <div className="detail-card">
        <div className="detail-header">
          <div className="detail-thumb">{project.image || "💻"}</div>
          <div className="detail-header-text">
            <h1>{project.title}</h1>
            <span className="project-category-badge">{project.category}</span>
          </div>
        </div>
        <p className="detail-description">{project.description}</p>
        {project.tech.length > 0 && (
          <div className="detail-section">
            <h3>Technologies</h3>
            <div className="tech-tags">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        )}
        {(project.github || project.live) && (
          <div className="detail-section">
            <h3>Links</h3>
            <div className="detail-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="detail-link github">
                  ⬡ GitHub Repo
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="detail-link live">
                  🚀 Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;