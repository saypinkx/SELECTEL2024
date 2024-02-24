from app.models import User
from fastapi import APIRouter, HTTPException
from app.database import db_session

user_router = APIRouter(prefix='/api/users')

session = db_session()


@user_router.post('/', status_code=201)
def create_user(
    firstname: str,
    password: str,
    email: str,
    lastname: str,
    patronym: str,
    tag: str
):
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


@user_router.put("/{user_id}")
def update_user(user_id: int,
                new_firstname: str,
                new_password: str,
                new_email: str,
                new_lastname: str,
                new_patronym: str,
                new_tag: str):
    db = db_session()
    db_item = db.query(User).filter(User.id == user_id).first()
    db_item.firstname = new_firstname
    db_item.password = new_password
    db_item.email = new_email
    db_item.lastname = new_lastname
    db_item.patronym = new_patronym
    db_item.tag = new_tag
    db.commit()
    return db_item


@user_router.post('/login', status_code=201)
def login(firstname: str, password: str):
    db = db_session()
    user_db = db.query(User).filter(
        User.firstname == firstname and User.password == password
        ).first()
    if not user_db:
        raise HTTPException(
            status_code=403,
            detail='User with this first name and password is not found'
        )
    return user_db.id


@user_router.delete("/{user_id}")
def delete_user(item_id: int):
    db = db_session()
    db_item = db.query(User).filter(User.id == item_id).first()
    db.delete(db_item)
    db.commit()
    return {"message": "User deleted successfully"}

