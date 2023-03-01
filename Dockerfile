FROM node:latest

WORKDIR /app

COPY client/package.json ./client/
COPY api/package.json ./api/

RUN cd client && npm install
RUN cd api && npm install

COPY client ./client
COPY api ./api



EXPOSE 3000:3000
EXPOSE 9000:9000

CMD ["sh", "-c", "cd client && npm start & cd api && npm start"]