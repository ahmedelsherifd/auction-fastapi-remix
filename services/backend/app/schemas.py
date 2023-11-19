from pydantic import BaseModel


class Product(BaseModel):
    id: int
    name: str


class ProductInput(BaseModel):
    name: str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None


class User(BaseModel):
    username: str
    email: str | None = None
    name: str | None = None


class UserInput(BaseModel):
    username: str
    email: str | None = None
    name: str | None = None
    password: str
    password2: str
