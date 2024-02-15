from fastapi import FastAPI, Path
from typing import Annotated
from starlette.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=4000)


@app.get('/test/')
def test_request():
    return 'OK'


@app.get('/test2/{data}')
def test_request2(data: Annotated[str, Path()]):
    return data
