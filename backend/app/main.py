from fastapi import FastAPI, Path
from typing import Annotated
from starlette.middleware.cors import CORSMiddleware
import uvicorn
from backend.db.settings import Test, db_session

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5500)


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
