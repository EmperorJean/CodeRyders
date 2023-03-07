FROM node:latest

WORKDIR /app

COPY client/package.json ./client/
COPY api/package.json ./api/

RUN cd client && npm install
RUN cd api && npm install

COPY client ./client
COPY api ./api

CMD ["sh", "-c", "cd client && npm start & cd api && npm start"]