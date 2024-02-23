from app.models import Donation
from fastapi import APIRouter
from database import db_session
from app.schemas.donation import DonationCreate
from fastapi import APIRouter, Depends, Body, Path, HTTPException, Query, status
from typing import Annotated
from fastapi import File, UploadFile

from sqlalchemy.orm import Session, joinedload
from sqlalchemy import select

router = APIRouter(prefix='/api/donation')

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
@router.post('/', status_code=201)
def create_donation0(type_donation: str, location: str, date: str, is_stationary: bool, centre: str, type_price: str,
                     file: UploadFile = File(default=None)):
    db = db_session()
    insert_stmnt = Donation.insert().values(type_donation=type_donation, location=location,
                                            date=date,
                                            is_stationary=is_stationary,
                                            centre=centre, type_price=type_price)
    # donation_db = Donation(type_donation=donation.type_donation, location=donation.location, date=donation.date,
    #                        is_stationary=donation.is_stationary,
    #                        centre=donation.centre, type_price=donation.type_price)
    db.execute(insert_stmnt)
    db.commit()
    return 'ok'


@router.post('/test', status_code=201)
def create_donation0(type_donation: str, location: str, date: str, is_stationary: bool, centre: str, type_price: str,
                     file: UploadFile = File(default=None)):
    db = db_session()
    filename = file.filename
    filepath = f'./files/{filename}'

    with open(filepath, 'wb') as f:
        content = file.file.read()
        f.write(content)
    insert_stmnt = Donation.insert().values(type_donation=type_donation, location=location,
                                            date=date,
                                            is_stationary=is_stationary,
                                            centre=centre, type_price=type_price, certificate=f.name)
    db.execute(insert_stmnt)
    db.commit()

    return {"message": f"Successfully uploaded {file.filename}"}
