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
    donations = relationship("Donation", back_populates='owner', uselist=True, foreign_keys='Donation.owner_id',
                             cascade='all, delete-orphan')


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
    owner_id: Mapped[int] = mapped_column(ForeignKey(User.id))
    owner = relationship("User", back_populates='donations', foreign_keys=owner_id)
    status: Mapped[str] = mapped_column(nullable=True)
