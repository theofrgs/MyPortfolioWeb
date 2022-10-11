FROM node:16-alpine3.15 as development

WORKDIR /app

COPY package.json package.json

COPY public public

COPY src src

RUN npm install --force

# Build
RUN npm run build


# # --------------------------------------------------------------


FROM node:16-alpine3.15 as production

WORKDIR /app

COPY package.json package.json

COPY public public

COPY src src

RUN npm install --force

# Build
RUN npm run build

# # --------------------------------------------------------------


FROM node:18-alpine3.15 as test

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --force --only=development

COPY . ./

