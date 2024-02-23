FROM node:20-buster

RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock server.js ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

CMD node ./server.js
