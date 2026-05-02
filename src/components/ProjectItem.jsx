import { Link } from "react-router-dom";

function ProjectItem({ project }) {
  const techPreview = project.tech.slice(0, 3);

  return (
    <Link to={`/project/${project.id}`} className="project-item">
      <div className="project-thumb">
        {project.image || "💻"}
      </div>
      <div className="project-item-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-item-right">
        <span className="project-category-badge">{project.category}</span>
        <div className="project-tech-mini">
          {techPreview.map((t) => (
            <span key={t} className="tech-dot">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;