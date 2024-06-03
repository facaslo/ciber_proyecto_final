FROM node:20
WORKDIR /home/web_server
COPY ./web_server/* .
RUN npm install
CMD ["npm", "start"]
