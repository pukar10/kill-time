# Repository Guide

## Project Overview

This repository contains a React + Vite frontend application in `web/`. Run frontend commands from `web/` or use the root npm wrapper scripts.

## Commands From Repo Root

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

These commands delegate to the matching `*:web` scripts. Use the scoped forms when adding root-level services such as `api/`:

```bash
npm run dev:web
npm run lint:web
npm run build:web
npm run preview:web
```

## Workspace Layout

- `web/` - React + Vite frontend application.
- `web/src/` - frontend source code.
- `web/public/` - static frontend assets.
- `web/package.json` - frontend dependencies and scripts.
- `web/vite.config.js` - frontend Vite config.
- `web/tsconfig.json` - frontend TypeScript config.

## Agent Workflow

- For frontend work, inspect `web/AGENTS.md` before editing.
- Keep app-specific code and frontend config inside `web/`.
- Do not move files back to the repo root unless explicitly requested.
- Do not overwrite unrelated user changes.
