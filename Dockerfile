#microservice prueba_flink 
FROM node:14-alpine

WORKDIR /src/app
COPY package*.json ./

RUN npm install 

COPY  . .

EXPOSE 3000

CMD ["node","app.js"]