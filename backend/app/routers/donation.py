from app.models import Donation, User
from fastapi import APIRouter
from app.database import db_session
from app.schemas.donation import DonationCreate
from fastapi import APIRouter, Depends, Body, Path, HTTPException, Query, status
from typing import Annotated
from fastapi import File, UploadFile
import uuid
from fastapi.responses import FileResponse
from datetime import datetime

from sqlalchemy.orm import Session, joinedload
from sqlalchemy import select

router = APIRouter(prefix='/api/donations')

session = db_session()


# @router.post('/', status_code=201)
# def create_donation0(donation: Annotated[Donation, Body()], file: UploadFile = File(default=None)):
#     try:
#         contents = file.file.read()
#         with open(file.filename, 'wb') as f:
#             f.write(contents)
#             db = db_session()
#             donation_db = Donation(type_donation=donation.type_donation, location=donation.location, date=donation.date,
#                                    is_stationary=donation.is_stationary,
#                                    centre=donation.centre, certificate=file)
#             db.add(donation_db)
#             db.commit()
#     except Exception:
#         return {"message": "There was an error uploading the file"}
#     finally:
#         file.file.close()
#
#     return {"message": f"Successfully uploaded {file.filename}"}
#
#     return 'ok'

# @router.post('/', status_code=201)
# def create_donation0(donation: Annotated[DonationCreate, Query()], file: UploadFile = File(default=None)):
#     db = db_session()
#     insert_stmnt = Donation.insert().values(type_donation=donation.type_donation, location=donation.location,
#                                             date=donation.date,
#                                             is_stationary=donation.is_stationary,
#                                             centre=donation.centre, type_price=donation.type_price)
#     # donation_db = Donation(type_donation=donation.type_donation, location=donation.location, date=donation.date,
#     #                        is_stationary=donation.is_stationary,
#     #                        centre=donation.centre, type_price=donation.type_price)
#     db.execute(insert_stmnt)
#     db.commit()
#     return 'ok'
# @router.post('/', status_code=201)
# def create_donation0(type_donation: str, location: str, date: str, is_stationary: bool, centre: str, type_price: str,
#                      file: UploadFile = File(default=None)):
#     db = db_session()
#     insert_stmnt = Donation.insert().values(type_donation=type_donation, location=location,
#                                             date=date,
#                                             is_stationary=is_stationary,
#                                             centre=centre, type_price=type_price)
#     # donation_db = Donation(type_donation=donation.type_donation, location=donation.location, date=donation.date,
#     #                        is_stationary=donation.is_stationary,
#     #                        centre=donation.centre, type_price=donation.type_price)
#     db.execute(insert_stmnt)
#     db.commit()
#     return 'ok'
@router.get('/', status_code=200)
def get_user_donation(user_id: Annotated[int, Query()]):
    db = db_session()
    user_db = db.query(User).get(user_id)
    if not user_db:
        raise HTTPException(status_code=403, detail='user with id not found')
    return user_db.donations


@router.post('/', status_code=201)
def create_donation(type_donation: str, location: str, date: str, is_stationary: bool, centre: str, type_price: str,
                    user_id: int, status: str,
                    file: UploadFile = File(default=None)):
    db = db_session()
    user_db = db.query(User).get(user_id)
    if not user_db:
        raise HTTPException(status_code=403, detail='user with id not found')
    donation_db = Donation(type_donation=type_donation, location=location, date=date, is_stationary=is_stationary,
                           centre=centre, type_price=type_price, owner_id=user_id, status=status)
    if file:
        file_format = file.filename.split('.')[1]
        filename = str(uuid.uuid4()) + '.' + file_format
        filepath = f'./app/files/{filename}'

        with open(filepath, 'wb') as f:
            content = file.file.read()
            f.write(content)
            f.close()
        donation_db.certificate = filename
    db.add(donation_db)
    db.commit()
    return {"message": f"Successfully create donation"}


@router.get("/{donation_id}/certificate")
def download_certificate(donation_id: int):
    db = db_session()
    donation_db = db.query(Donation).get(donation_id)

    if not donation_db:
        raise HTTPException(status_code=403, detail='donation with id not found')
    return FileResponse(path=f'./app/files/{donation_db.certificate}', filename=donation_db.certificate,
                        media_type='multipart/form-data')


@router.put("/{donation_id}")
def update_donation(donation_id: Annotated[int, Path()], location: str, date: str, is_stationary: bool,
                    centre: str, type_price: str, status: str,
                    file: UploadFile = File(default=None)):
    db = db_session()
    donation_db = db.query(Donation).get(donation_id)
    if not donation_db:
        raise HTTPException(status_code=403, detail='donation with id not found')
    if file:
        file_format = file.filename.split('.')[1]
        filename = 'r' + donation_db.certificate + '.' + file_format
        filepath = f'./app/files/{filename}'

        with open(filepath, 'wb') as f:
            content = file.file.read()
            f.write(content)
            f.close()
        donation_db.certificate = filename

    donation_db.location, donation_db.date, donation_db.is_stationary, donation_db.centre, donation_db.type_price, donation_db.status = location, date, is_stationary, centre, type_price, status
    db.add(donation_db)
    db.commit()
    return {"message": f"Successfully update donation"}
