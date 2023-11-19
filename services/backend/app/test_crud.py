from . import crud


def test_crud_get_products(db):
    crud.create_product(db, name="Iphone 13")
    products = crud.get_products(db)
    product = products[0]
    assert product.name == "Iphone 13"
    assert product.id


def test_crud_get_product(db):
    product = crud.create_product(db, name="Iphone 13")
    product = crud.get_product(db, product.id)

    assert product.name == "Iphone 13"
    assert product.id


def test_crud_create_user(db):
    crud.create_user(
        db,
        name="Ahmed Elsherif",
        username="ahmed",
        email="ahmedelsherifd@gmail.com",
        password="ahmed",
    )
    user = crud.get_user(db, "ahmed")
    assert user.name == "Ahmed Elsherif"
