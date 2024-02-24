from fastapi import FastAPI, Path
from typing import Annotated
from starlette.middleware.cors import CORSMiddleware
import uvicorn
from app.database import Test, db_session, db_engine
from app.models import base
from app.routers.donation import router
from app.routers.users import user_router
from app.database import Db

app = FastAPI()

app.include_router(router)
app.include_router(user_router)
base.metadata.drop_all(bind=db_engine())
base.metadata.create_all(bind=db_engine())
@app.on_event("startup")
def on_startup():
    print('startup')


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/test1/')
def test_request():
    return 'OK'


@app.get('/test2/{data}')
def test_request2(data: Annotated[str, Path()]):
    return data


@app.get('/test_db')
def test_db():
    db = db_session()
    test = db.get(Test, 1)
    return test


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5500)
