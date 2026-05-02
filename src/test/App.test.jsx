import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import AddProjectForm from "../components/AddProjectForm";
import ProjectList from "../components/ProjectList";
import ProjectItem from "../components/ProjectItem";

describe("AddProjectForm", () => {
  it("renders Title and Description fields", () => {
    render(<AddProjectForm onAdd={() => {}} />);
    expect(screen.getByPlaceholderText("My Awesome Project")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("What does this project do?")).toBeInTheDocument();
  });

  it("shows validation errors when submitted empty", () => {
    render(<AddProjectForm onAdd={() => {}} />);
    fireEvent.click(screen.getByRole("button", { name: /^Add$/i }));
    expect(screen.getByText("Title is required")).toBeInTheDocument();
    expect(screen.getByText("Description is required")).toBeInTheDocument();
  });

  it("calls onAdd with correct data and resets form", () => {
    const mockAdd = vi.fn();
    render(<AddProjectForm onAdd={mockAdd} />);
    fireEvent.change(screen.getByPlaceholderText("My Awesome Project"), {
      target: { value: "Test Project" },
    });
    fireEvent.change(screen.getByPlaceholderText("What does this project do?"), {
      target: { value: "A test description" },
    });
    fireEvent.click(screen.getByRole("button", { name: /^Add$/i }));
    expect(mockAdd).toHaveBeenCalledTimes(1);
    expect(mockAdd.mock.calls[0][0]).toMatchObject({
      title: "Test Project",
      description: "A test description",
    });
    expect(screen.getByPlaceholderText("My Awesome Project").value).toBe("");
  });
});

describe("ProjectList", () => {
  it("renders empty state when no projects", () => {
    render(
      <MemoryRouter>
        <ProjectList projects={[]} />
      </MemoryRouter>
    );
    expect(screen.getByText("No projects found")).toBeInTheDocument();
  });

  it("renders a project item for each project", () => {
    const projects = [
      { id: 1, title: "App One", description: "Desc one", tech: ["React"], category: "Web App", image: "💻" },
      { id: 2, title: "App Two", description: "Desc two", tech: ["CSS"], category: "Website", image: "🌐" },
    ];
    render(
      <MemoryRouter>
        <ProjectList projects={projects} />
      </MemoryRouter>
    );
    expect(screen.getByText("App One")).toBeInTheDocument();
    expect(screen.getByText("App Two")).toBeInTheDocument();
  });
});

describe("ProjectItem", () => {
  const project = {
    id: 42,
    title: "Demo Project",
    description: "A demo",
    tech: ["JS", "HTML"],
    category: "Tool",
    image: "🔧",
  };

  it("renders project title and description", () => {
    render(
      <MemoryRouter>
        <ProjectItem project={project} />
      </MemoryRouter>
    );
    expect(screen.getByText("Demo Project")).toBeInTheDocument();
    expect(screen.getByText("A demo")).toBeInTheDocument();
  });

  it("links to the correct project detail route", () => {
    render(
      <MemoryRouter>
        <ProjectItem project={project} />
      </MemoryRouter>
    );
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/project/42");
  });
});