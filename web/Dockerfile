FROM node:18.16.0-alpine3.18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

RUN addgroup -S tom && adduser -S tom -G tom

RUN chown -R tom:tom .

USER tom

CMD ["npm", "run", "dev"]