from python:3.10
RUN mkdir /APP
WORKDIR /APP
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
WORKDIR ./bot
RUN python3 script.py
CMD ["python3","script.py"]