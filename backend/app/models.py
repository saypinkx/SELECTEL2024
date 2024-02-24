from app.database import Base
from sqlalchemy import ForeignKey, Table, Column, Integer, LargeBinary, String, Boolean
from sqlalchemy.orm import Mapped, mapped_column, relationship

base = Base
# Donation = Table('Donation', base.metadata,
#                  Column('id', Integer, autoincrement=True, primary_key=True),
#                  Column('type_donation', String), Column('date', String), Column('is_stationary', Boolean),
#                  Column('location', String), Column('centre', String),
#                  Column('certificate', String, nullable=True), Column('type_price', String), extend_existing=True
#                  )


Donation_User = Table('Donation_User',
                      Base.metadata,
                      Column('id', Integer, autoincrement=True, primary_key=True),
                      Column('donation_id', Integer, ForeignKey('Donation.id')),
                      Column('user_id', Integer, ForeignKey('User.id'), nullable=True), extend_existing=True
                      )


class Donation(Base):
    __tablename__ = 'Donation'
    __table_args__ = {'extend_existing': True}
    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)
    type_donation: Mapped[str] = mapped_column()
    date: Mapped[str] = mapped_column()
    type_price: Mapped[str] = mapped_column()
    is_stationary: Mapped[bool] = mapped_column(nullable=True)
    location: Mapped[str] = mapped_column(nullable=True)
    centre: Mapped[str] = mapped_column()
    certificate: Mapped[str] = mapped_column(nullable=True)


class User(base):
    __tablename__ = 'User'
    __table_args__ = {'extend_existing': True}
    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)
    firstname: Mapped[str] = mapped_column(unique=True)
    password: Mapped[str] = mapped_column()
    email: Mapped[str] = mapped_column()
    lastname: Mapped[str] = mapped_column()
    patronym: Mapped[str] = mapped_column(nullable=True)
    tag: Mapped[str] = mapped_column(nullable=True)
    donations = relationship('Donation', uselist=True, secondary=Donation_User)
