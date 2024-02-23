from pydantic import BaseModel



class Donation(BaseModel):
    type_donation: str
    date: str
    type_price: str
    is_stationary: str
    location: str
    centre: str

    class Config:
        orm_mode = True
