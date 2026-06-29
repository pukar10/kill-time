# Repository Guide

## Project Overview

This repository is a React + Vite frontend application. It uses React Router for client-side routing and a demo login flow backed by `localStorage`.

## Tech Stack

- React 19
- Vite
- React Router
- TypeScript strict mode
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

## Project Layout

```
web/src/
├── main.tsx              # Entry point — loads VA web component loader
├── App.tsx               # Root component
├── va-components.d.ts    # JSX type definitions for va-* web components
├── App.css
└── index.css
```


```
web/src/
├── components/           # Shared/reusable components
│   ├── ComponentName/
│   │   ├── ComponentName.tsx
│   │   └── ComponentName.test.tsx
├── features/             # Feature-specific modules
│   ├── featureName/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── types.ts
├── hooks/                # Shared custom hooks
├── utils/                # Shared utility functions
├── types/                # Shared TypeScript types
└── api/                  # API client and request functions
```

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
