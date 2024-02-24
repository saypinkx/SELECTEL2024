from models import base
from database import db_engine
base.metadata.drop_all(bind=db_engine())