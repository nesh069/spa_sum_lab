import { useState } from "react";

const CATEGORIES = ["Web App", "Website", "Tool", "Mobile", "API", "Other"];
const EMOJIS = ["💻", "🎵", "🍔", "🧮", "📱", "🌐", "🔧", "🚀", "📊"];

const empty = {
  title: "",
  description: "",
  tech: "",
  github: "",
  live: "",
  category: "Web App",
  image: "💻",
};

function AddProjectForm({ onAdd }) {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [showExtra, setShowExtra] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Title is required";
    if (!form.description.trim()) e.description = "Description is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    onAdd({
      ...form,
      tech: form.tech
        ? form.tech.split(",").map((t) => t.trim()).filter(Boolean)
        : ["Project"],
    });
    setForm(empty);
    setErrors({});
    setShowExtra(false);
  };

  return (
    <section className="add-form-section">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Icon</label>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {EMOJIS.map((em) => (
              <button
                key={em}
                type="button"
                onClick={() => setForm((p) => ({ ...p, image: em }))}
                style={{
                  fontSize: "1.3rem",
                  background: form.image === em ? "rgba(124,106,247,0.18)" : "var(--bg2)",
                  border: `1px solid ${form.image === em ? "var(--accent)" : "var(--border)"}`,
                  borderRadius: "7px",
                  padding: "0.25rem 0.45rem",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {em}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="My Awesome Project"
          />
          {errors.title && <span className="form-error">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="What does this project do?"
          />
          {errors.description && <span className="form-error">{errors.description}</span>}
        </div>

        <button
          type="button"
          className="btn btn-secondary"
          style={{ marginBottom: "1rem", fontSize: "0.82rem", padding: "0.4rem 0.9rem" }}
          onClick={() => setShowExtra((p) => !p)}
        >
          {showExtra ? "▲ Less options" : "▼ More options (tech, links, category)"}
        </button>

        {showExtra && (
          <>
            <div className="form-group">
              <label>Technologies (comma separated)</label>
              <input
                name="tech"
                value={form.tech}
                onChange={handleChange}
                placeholder="React, Node.js, CSS"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Category</label>
                <select name="category" value={form.category} onChange={handleChange}>
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>GitHub URL</label>
                <input name="github" value={form.github} onChange={handleChange} placeholder="https://github.com/..." />
              </div>
            </div>
            <div className="form-group">
              <label>Live URL</label>
              <input name="live" value={form.live} onChange={handleChange} placeholder="https://yourapp.com" />
            </div>
          </>
        )}

        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </section>
  );
}

export default AddProjectForm;