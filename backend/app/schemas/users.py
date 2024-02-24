from pydantic import BaseModel
from typing import Optional
from fastapi_users import schemas



class UserRegister(BaseModel):
    email: str
    username: str
    password: str
    first_name: str
    tags: str

    class Config:
        orm_mode = True


class UserCreate(BaseModel):
    email: str
    username: str
    password: str
    first_name: str
    tags: str
    last_name: Optional[str] = None
    patronym: Optional[str] = None

    class Config:
        orm_mode = True


class UserLogin(BaseModel):
    email: str
    password: str


class UserResponse(BaseModel):
    id: int
    username: str
    first_name: str


    class Config:
        orm_mode = True


class UserUpdate(BaseModel):
    username: str
    password: str
    first_name: str

    class Config:
        orm_mode = True
