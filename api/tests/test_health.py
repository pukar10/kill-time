from src.health.routes import HealthResponse, read_health
from src.main import read_root


def test_read_root() -> None:
    response = read_root()
    assert response["status"] == "ok"


def test_read_health() -> None:
    response = read_health()

    assert isinstance(response, HealthResponse)
    assert response.status == "ok"
