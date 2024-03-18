FROM node:alpine3.18 as build

WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn

COPY . .