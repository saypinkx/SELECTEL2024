from pydantic import BaseModel


class DonationCreate(BaseModel):
    type_donation: str
    date: str
    type_price: str
    is_stationary: bool
    location: str
    centre: str

    class Config:
        orm_mode = True
