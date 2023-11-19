from fastapi.testclient import TestClient
from . import crud
from .main import app


def test_view_get_products(db, client):
    crud.create_product(db, name="Iphone")

    response = client.get("/products/")
    assert response.status_code == 200
    assert response.json()[0]["name"] == "Iphone"


def test_view_create_product(client):
    response = client.post("/products/", json={"name": "Iphone"})
    assert response.status_code == 200
    assert response.json()["name"] == "Iphone"


def test_view_get_product(db, client):
    product = crud.create_product(db, name="Iphone")

    response = client.get("/products/{pk}".format(pk=product.id))
    assert response.status_code == 200
    assert response.json()["name"] == "Iphone"


def test_view_get_token(db, client):
    user = crud.create_user(
        db,
        name="Ahmed Elsherif",
        username="ahmed",
        email="ahmedelsherifd@gmail.com",
        password="ahmed",
    )

    response = client.post("/token", data={"username": "ahmed", "password": "ahmed"})
    assert response.status_code == 200


def test_view_get_user_me(db, client):
    crud.create_user(
        db,
        name="Ahmed Elsherif",
        username="ahmed",
        email="ahmedelsherifd@gmail.com",
        password="ahmed",
    )

    response = client.post("/token", data={"username": "ahmed", "password": "ahmed"})
    data = response.json()
    access_token = data["access_token"]
    token_type = data["token_type"]
    response = client.get(
        "/users/me/", headers={"Authorization": f"{token_type} {access_token}"}
    )
    assert response.status_code == 200


def test_view_create_user(client):
    response = client.post(
        "/users/",
        json={
            "name": "Ahmed Elsherif",
            "email": "ahemdelsherifd@gmail.com",
            "username": "ahmed",
            "password": "ahmed",
            "password2": "ahmed",
        },
    )
    assert response.status_code == 200


# def test_view_login_with_google(client):
#     response = client.get("/login_with_google")
#     assert response.status_code == 200
#     # breakpoint()
