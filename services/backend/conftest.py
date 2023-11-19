from os import environ
import pytest
from fastapi.testclient import TestClient
from app.database import SessionLocal, engine

from app.database import Base, engine
import app.models

environ["env"] = "testing"


@pytest.fixture
def db():
    connection = engine.connect()
    transaction = connection.begin()

    db = SessionLocal(bind=connection)

    yield db

    db.close()
    transaction.rollback()
    connection.close()


@pytest.fixture(scope="session", autouse=True)
def database_setup(request):
    Base.metadata.create_all(engine)

    def drop_tables():
        Base.metadata.drop_all(engine)

    request.addfinalizer(drop_tables)


@pytest.fixture()
def client(db):
    from app.main import app, get_db

    def overid_get_db():
        try:
            yield db
        finally:
            db.close()

    app.dependency_overrides[get_db] = overid_get_db

    with TestClient(app) as client:
        yield client
