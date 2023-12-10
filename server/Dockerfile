FROM node:14.17.0-alpine3.12
COPY server /server
WORKDIR /server
RUN npm install
EXPOSE 3001
CMD ["node", "index.js"]
