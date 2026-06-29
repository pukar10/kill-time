# API Agent Guide

## Project Overview

This directory `api/` contains the FastAPI backend. Keep backend application code, Python dependency files, API tests, and backend-specific configuration here.

## Expected Tech Stack

- Python
- FastAPI
- Uvicorn
- Pydantic
- Pytest
- Ruff, if linting/formatting is added

## Commands

Run these from `api/`:

```bash
uv sync
uv run uvicorn src.main:app --reload
uv run pytest
uv run ruff check .
uv run ruff format .
```

Use `uv` as the package manager. Do not mix package managers.

## Suggested Structure

Use the repo's actual structure once files exist. A reasonable FastAPI layout is:

- `src/main.py` - FastAPI app entry point.
- `src/core/` - settings, configuration, and shared setup.
- `src/health/` - health check routes.
- `src/middleware/` - middleware configuration.
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
uv run pytest
uv run ruff check .
```

If commands are not yet configured or cannot be run, report what remains unverified.

## Agent Workflow

- Inspect the current `api/` structure before adding files.
- Keep backend changes scoped to `api/`.
- Coordinate frontend API contract changes with `web/` when needed.
- Do not modify frontend files for backend-only tasks unless the API contract requires it.
