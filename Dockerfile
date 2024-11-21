FROM node:18

ARG APP_DIR=/node_src
WORKDIR ${APP_DIR}

COPY package*.json index.js ./

RUN npm install

ARG port=3000
EXPOSE ${port}

CMD node index.js