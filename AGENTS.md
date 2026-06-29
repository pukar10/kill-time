# Repository Guide

## Project Overview

This repository is a React + Vite frontend application. It uses React Router for client-side routing and currently has a simple login flow that stores a `loggedIn` flag in `localStorage`.

## Common Commands

```bash
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

- `npm run dev` starts the Vite development server.
- `npm run build` creates a production build.
- `npm run lint` runs ESLint across the project.
- `npm run preview` serves the production build locally.

## Project Structure

- `src/main.jsx` - React entry point; mounts the app and wraps it in `BrowserRouter`.
- `src/App.jsx` - top-level routes and login redirects.
- `src/pages/Login.jsx` - login page and localStorage login state.
- `src/pages/Dashboard.jsx` - dashboard page and logout action.
- `src/index.css` and `src/App.css` - application styles.
- `public/` - static files served by Vite.
- `vite.config.js` - Vite configuration.
- `eslint.config.js` - ESLint configuration.

## Development Notes

- Follow the existing React component style before introducing new patterns.
- Keep changes focused on the requested feature or bug.
- Preserve the current routing behavior unless the task explicitly asks to change it.
- Use React Router APIs for navigation and route changes.
- Treat the current `localStorage` login flag as demo-only client state, not real authentication.
- Do not reformat unrelated files or rewrite the app structure without a clear reason.

## Styling

- Prefer the existing CSS files and local component styles already used in the app.
- Keep UI changes simple and consistent with the current app unless asked to redesign it.
- Avoid adding a styling framework or component library unless explicitly requested.

## Verification

After code changes, run the relevant checks:

```bash
npm run lint
npm run build
```

If a command cannot be run, report the reason and what remains unverified.

### Commit Messages

Follow Conventional Commits:

- `feat`: — New feature
- `fix`: — Bug fix
- `chore`: — Maintenance, deps, config
- `docs`: — Documentation only
- `test`: — Adding or updating tests
- `refactor`: — Code change with no behavior change
- `ci`: — CI/CD pipeline changes