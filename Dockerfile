FROM node:18.17.0-slim

RUN apt-get update -y && apt-get install -y openssl

COPY . .

RUN npm install

RUN NODE_ENV='development' PORT=3081 npm run start:dev

EXPOSE 3000

CMD ["npm", "run", "start:dev"]