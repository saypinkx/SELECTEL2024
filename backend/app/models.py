from database import Base
from sqlalchemy import ForeignKey, Table, Column, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship


class User(Base):
    __tablename__ = 'User'
    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)
    firstname: Mapped[str] = mapped_column(unique=True)
    password: Mapped[str] = mapped_column()
    tag: Mapped[str] = mapped_column(nullable=True)


