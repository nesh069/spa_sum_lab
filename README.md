# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🚀 Portfolio Platform — React SPA

A personal project showcase application built with React. Browse, search, and add projects dynamically — all without page reloads.

---

## 📸 Features

- **Landing page** — lists all your projects in a clean, searchable list
- **Add Project form** — fill in a title, description, tech stack, links, and more; page updates instantly
- **Search / filter** — live filtering by title, description, or technology
- **Project detail view** — click any project to see a full detail page (client-side routing via React Router)
- **Responsive design** — works on mobile, tablet, and desktop

---

## ⚙️ Setup & Installation

**Prerequisites:** Node.js v18+ and npm

```bash
# 1. Clone the repo
git clone https://github.com/nesh069/portfolio-platform.git
cd portfolio-platform

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Running Tests

```bash
npm test
```

Tests are written with **Vitest** and **React Testing Library**. They cover:
- Form renders correctly
- Validation errors display on empty submit
- `onAdd` callback is called with correct data
- Project list renders items / empty state
- Project item links to correct route

---

## 🏗 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Preview it locally with:

```bash
npm run preview
```

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI library |
| React Router v6 | Client-side routing |
| Vite | Build tool & dev server |
| Vitest | Unit testing |
| React Testing Library | Component testing |
| CSS (custom properties) | Styling |

---

## ⚠️ Known Limitations

- Projects are stored in React state only — they reset on page refresh (no backend/localStorage)
- No image upload; projects use emoji icons instead

---

# 📂 Project Structure
📦src
 ┣ 📂components
 ┃ ┣ 📜AddProjectForm.jsx
 ┃ ┣ 📜Navbar.jsx
 ┃ ┣ 📜ProjectItem.jsx
 ┃ ┗ 📜ProjectList.jsx
 ┣ 📂pages
 ┃ ┣ 📜Home.jsx
 ┃ ┗ 📜ProjectDetail.jsx
 ┣ 📂styles
 ┃ ┗ 📜global.css
 ┣ 📂test
 ┃ ┣ 📜App.test.jsx
 ┃ ┗ 📜setup.js
 ┣ 📜App.jsx
 ┗ 📜main.jsx

## 👤 Author

**Simpson** — [@nesh069]
(https://github.com/nesh069)

