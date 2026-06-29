# kill-time API

FastAPI backend for `kill-time`.

## Setup

This package uses `uv`.

```bash
uv sync
```

## Commands

Run from `api/`:

```bash
uv run uvicorn src.main:app --reload
uv run pytest
uv run ruff check .
uv run ruff format .
```

Or run the root wrapper scripts:

```bash
npm run dev:api
npm run test:api
npm run lint:api
npm run format:api
```

## Endpoints

- `GET /` - service metadata
- `GET /health` - health check

