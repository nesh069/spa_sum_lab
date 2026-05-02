import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🔍</div>
        <h3>No projects found</h3>
        <p>Try a different search term or add a new project above.</p>
      </div>
    );
  }

  return (
    <div className="projects-list">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;