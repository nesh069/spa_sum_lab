import { Link } from "react-router-dom";

function Navbar() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span>{"<"}</span>Simpson<span>{"/>"}</span>
      </Link>
      <ul className="navbar-links">
        <li>
          <a href="#projects" onClick={scrollToProjects}>
            Projects
          </a>
        </li>
        <li>
          <a
            href="https://github.com/nesh069"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
