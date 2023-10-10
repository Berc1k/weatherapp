FROM node:latest
WORKDIR /server
COPY package*.json tsconfig.json ./
RUN npm install
COPY ./src ./src

EXPOSE 8080
CMD ["npm","start"]