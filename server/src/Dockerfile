FROM node:20.5.0

# Create app directory
WORKDIR /usr/src

COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]