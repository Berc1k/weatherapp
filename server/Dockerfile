FROM node:latest
WORKDIR /server
RUN npm install nodemon
COPY package*.json tsconfig.json nodemon.json ./
RUN npm install

# COPY ./src ./src

EXPOSE 8080
CMD ["npm","run", "dev"]