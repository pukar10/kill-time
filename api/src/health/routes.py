from fastapi import APIRouter
from pydantic import BaseModel


class HealthResponse(BaseModel):
    status: str


router = APIRouter(tags=["health"])


@router.get("/health", response_model=HealthResponse)
def read_health() -> HealthResponse:
    return HealthResponse(status="ok")

