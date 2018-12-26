FROM node:8-alpine AS builder

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
