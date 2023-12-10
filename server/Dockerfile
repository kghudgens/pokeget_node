FROM node:14.17.0-alpine3.12
WORKDIR /server

COPY . /server/
RUN npm install

EXPOSE 3001
CMD ["node", "index.js"]
