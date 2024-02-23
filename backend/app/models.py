from database import Base
from sqlalchemy import ForeignKey, Table, Column, Integer, LargeBinary
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy_file import FileField

zxc = Base
Donation = Table('Donation', zxc.metadata,
                 Column('id', Integer, autoincrement=True, primary_key=True),
                 Column('certificate', FileField), extend_existing=True
                 )


class User(zxc):
    __tablename__ = 'User'
    __table_args__ = {'extend_existing': True}
    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)
    firstname: Mapped[str] = mapped_column(unique=True)
    password: Mapped[str] = mapped_column()
    tag: Mapped[str] = mapped_column(nullable=True)

#
# Donation_User = Table('Donation_User',
#                       Base.metadata,
#                       Column('id', Integer, autoincrement=True, primary_key=True),
#                       Column('donation_id', Integer, ForeignKey('Donation.id')),
#                       Column('user_id', Integer, ForeignKey('User.id'))
#                       )


# class Donation(Base):
#     __table__name = 'Donation'
#     id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)
#     type_donation: Mapped[str] = mapped_column(unique=True)
#     date: Mapped[str] = mapped_column()
#     type_price: Mapped[str] = mapped_column()
#     is_stationary: Mapped[bool] = mapped_column(nullable=True)
#     location: Mapped[str] = mapped_column(nullable=True)
#     centre: Mapped[str] = mapped_column()
#     certificate: Mapped[FileField] = mapped_column()