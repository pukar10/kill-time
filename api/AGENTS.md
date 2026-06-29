# API Agent Guide

## Project Overview

This directory is reserved for the FastAPI backend. Keep backend application code, Python dependency files, API tests, and backend-specific configuration inside `api/`.

## Expected Tech Stack

- Python
- FastAPI
- Uvicorn
- Pydantic
- Pytest
- Ruff, if linting/formatting is added

## Commands

No backend commands are defined yet. When the API is scaffolded, document the exact commands here.

Expected future commands:

```bash
uvicorn main:app --reload
pytest
ruff check .
ruff format .
```

If a package manager is chosen, prefer documenting one clear workflow, such as `uv`, `pip`, or Poetry. Do not mix package managers without a reason.

## Suggested Structure

Use the repo's actual structure once files exist. A reasonable FastAPI layout is:

- `main.py` - FastAPI app entry point.
- `app/` - application package.
- `app/api/` - route modules.
- `app/core/` - settings, configuration, and shared setup.
- `app/models/` - database or domain models.
- `app/schemas/` - Pydantic request/response schemas.
- `app/services/` - business logic.
- `tests/` - API and unit tests.

## Coding Standards

- Use type hints for all public functions, route handlers, and service functions.
- Prefer Pydantic models for request and response shapes.
- Keep route handlers thin; move business logic into services.
- Avoid broad `except Exception` handlers unless they re-raise or return a deliberate API error.
- Do not hard-code secrets, tokens, database URLs, or environment-specific values.
- Read configuration from environment variables or a settings object.

## API Standards

- Use clear RESTful route names.
- Return explicit response models when practical.
- Use appropriate HTTP status codes.
- Validate inputs at the schema boundary.
- Keep authentication and authorization checks close to the route or dependency layer.

## Verification

After backend code changes, run the relevant checks once commands exist:

```bash
pytest
ruff check .
```

If commands are not yet configured or cannot be run, report what remains unverified.

## Agent Workflow

- Inspect the current `api/` structure before adding files.
- Keep backend changes scoped to `api/`.
- Coordinate frontend API contract changes with `web/` when needed.
- Do not modify frontend files for backend-only tasks unless the API contract requires it.
