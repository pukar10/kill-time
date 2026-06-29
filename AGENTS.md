# Repository Guide

## Project Overview

This repository is a React + Vite frontend application. It uses React Router for client-side routing, shadcn/ui components, Tailwind CSS, and a demo login flow backed by `localStorage`.

## Tech Stack

- React 19
- Vite
- React Router
- TypeScript strict mode
- Tailwind CSS
- shadcn/ui
- ESLint

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

- `npm run dev` starts the Vite development server.
- `npm run lint` runs ESLint across the project.
- `npm run build` creates a production build.
- `npm run preview` serves the production build locally.

## Project Structure

- `src/main.jsx` - React entry point; mounts the app and wraps it in `BrowserRouter`.
- `src/App.jsx` - top-level routes and login/logout state.
- `src/pages/` - page-level React components.
- `src/pages/Login.jsx` - login form and credential handling.
- `src/pages/Home.jsx` - protected post-login homepage.
- `src/components/ui/` - shadcn/ui components.
- `src/lib/utils.js` - shared utility helpers, including `cn()`.
- `src/index.css` - global styles, Tailwind imports, and shadcn theme variables.
- `public/` - static files served by Vite.
- `components.json` - shadcn/ui configuration.
- `tsconfig.json` - TypeScript configuration.
- `vite.config.js` - Vite configuration and `@/*` path alias.
- `eslint.config.js` - ESLint configuration.

## Coding Standards

- Use functional React components and hooks exclusively. Do not add class components.
- TypeScript strict mode is enabled.
- All props must be typed.
- Avoid `any`.
- Use `@/*` imports for files under `src` when it improves clarity.
- Follow existing component and styling patterns before introducing new abstractions.
- Keep changes focused on the requested feature or bug.
- Do not reformat unrelated files or rewrite the app structure without a clear reason.

## UI Standards

- Use shadcn/ui components when appropriate.
- Keep custom UI consistent with the existing Tailwind and shadcn styles.
- Prefer accessible controls and semantic HTML.
- Avoid adding a new styling framework or component library unless explicitly requested.

## Auth Notes

- The current auth flow is demo-only and stores a `loggedIn` flag in `localStorage`.
- `App.jsx` owns login/logout state and passes callbacks into page components.
- Use React Router APIs for navigation and route changes.
- Do not treat the current auth flow as production authentication.

## Verification

After code changes, run the relevant checks:

```bash
npm run lint
npm run build
```

If a command cannot be run, report the reason and what remains unverified.

## Git And Commits

Follow Conventional Commits:

- `feat:` new feature
- `fix:` bug fix
- `chore:` maintenance, dependencies, or config
- `docs:` documentation only
- `test:` adding or updating tests
- `refactor:` behavior-preserving code change
- `ci:` CI/CD pipeline changes

## Agent Workflow

- Inspect existing code before editing.
- Make minimal, focused changes.
- Do not overwrite unrelated user changes.
- Do not reformat the whole repo unless asked.
- Report verification results after changes.
