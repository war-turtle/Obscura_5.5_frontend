FROM node:8-alpine AS builder

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .

RUN npm run prod    

FROM node:8-alpine

COPY --from=builder /app/build /app/build

RUN npm install -g serve

CMD [ "serve","-l","3000","-s","app/build" ]

EXPOSE 3000
