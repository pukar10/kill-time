# Repository Guide

## Project Overview

This directory contains the React + Vite frontend application. It uses React Router for client-side routing and a demo login flow backed by `localStorage`.

## Tech Stack

- React 19
- Vite
- React Router
- TypeScript strict mode
- ESLint

## Commands

Run these from `web/`, or use the root package scripts from the repo root.

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
- `src/index.css` - global application styles.
- `public/` - static files served by Vite.
- `tsconfig.json` - TypeScript configuration.
- `vite.config.js` - Vite configuration and `@/*` path alias.
- `eslint.config.js` - ESLint configuration.

## Coding Standards

- Use functional React components and hooks exclusively. No class components.
- **TypeScript strict mode** is enabled. All props must be typed. Avoid `any`.
- **Path aliases**: Use `@/*` to import from `src/` (e.g., `import { Thing } from '@/components/Thing'`).
- Follow existing component and styling patterns before introducing new abstractions.
- **State management**: Prefer React context and hooks for state. Reach for a dedicated state library only when context becomes unwieldy.

## UI Standards

- Keep custom UI consistent with the existing CSS styles.
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
