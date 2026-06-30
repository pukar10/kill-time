from fastapi import FastAPI

from src.core.config import settings
from src.health.routes import router as health_router
from src.middleware.cors import configure_cors


def read_root() -> dict[str, str]:
    return {
        "name": settings.app_name,
        "version": settings.app_version,
        "status": "ok",
    }


def create_app() -> FastAPI:
    app = FastAPI(title=settings.app_name, version=settings.app_version)

    configure_cors(app)
    app.include_router(health_router)
    app.add_api_route("/", read_root, methods=["GET"])

    return app


app = create_app()
