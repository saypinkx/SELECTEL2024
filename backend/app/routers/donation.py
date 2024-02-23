from app.models import Donation
from fastapi import APIRouter
from database import db_session
from app.schemas.donation import Donation
from fastapi import APIRouter, Depends, Body, Path, HTTPException, Query, status
from typing import Annotated
from fastapi import File, UploadFile

from sqlalchemy.orm import Session, joinedload
from sqlalchemy import select

router = APIRouter(prefix='/api/donation')

session = db_session()


@router.post('/', status_code=201)
def create_donation(donation: Annotated[Donation, Body()], file: UploadFile = File()):
    try:
        contents = file.file.read()
        with open(file.filename, 'wb') as f:
            f.write(contents)
    except Exception:
        return {"message": "There was an error uploading the file"}
    finally:
        file.file.close()

    return {"message": f"Successfully uploaded {file.filename}"}
    db = db_session()
    donation_db = Donation(name=donation.name, date=donation.date, time=donation.time, location=donation.location,
                           manager=donation.manager, description=donation.description, contacts=donation.contacts)
    db.add(donation_db)
    db.commit()
    return 'ok'
