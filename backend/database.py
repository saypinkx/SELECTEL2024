from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from config import DB_PORT, DB_HOST, DB_USER, DB_PASS, DB_NAME
from sqlalchemy import ForeignKey, Table, Column, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship, declarative_base


class Db:
    def __init__(self):
        self.connect_string = f"postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
        self.engine = create_engine(self.connect_string)
        self.session = sessionmaker(bind=self.engine, autoflush=False)()
        self.connect = self.engine.connect()


DB = Db()


def db_connect():
    return DB.connect


def db_session():
    return DB.session


def db_engine():
    return DB.engine


Base = declarative_base()


class Test(Base):
    __tablename__ = 'test_db'
    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)


def test_db():
    Base.metadata.create_all(bind=db_engine())
    test = Test(id=2)
    db = db_session()
    db.add(test)
    db.commit()
test_db()
