FROM node:lts-alpine

WORKDIR /usr/app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
