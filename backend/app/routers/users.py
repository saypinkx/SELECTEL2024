from app.models import User
from fastapi import APIRouter
from app.database import db_session

user_router = APIRouter(prefix='/api/users')

session = db_session()


@user_router.post('/', status_code=201)
def create_user(firstname: str, password: str, email: str, lastname: str, patronym: str, tag: str):
    db = db_session()
    donation_db = User(firstname=firstname,
                       password=password,
                       email=email,
                       lastname=lastname,
                       patronym=patronym,
                       tag=tag)

    db.add(donation_db)
    db.commit()

    return {"message": "Successfully create User"}


@user_router.get("/{user_id}")
def get_user(user_id: int):
    db = db_session()
    item = db.query(User).filter(User.id == user_id).first()
    return item


@user_router.get("/")
def get_all_users():
    db = db_session()
    item = db.query(User).all()
    return item


@user_router.put("/{user_id}")
def update_password(user_id: int, new_password: str):
    db = db_session()
    db_item = db.query(User).filter(User.id == user_id).first()
    db_item.password = new_password
    db.commit()
    return db_item


@user_router.delete("/{user_id}")
def delete_item(item_id: int):
    db = db_session()
    db_item = db.query(User).filter(User.id == item_id).first()
    db.delete(db_item)
    db.commit()
    return {"message": "Item deleted successfully"}
