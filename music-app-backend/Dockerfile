FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json package-lock.json /opt/app
RUN npm install
COPY . /opt/app
EXPOSE 8000
CMD [ "npm", "start"]