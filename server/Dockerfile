#FROM node:latest
FROM node:current-alpine

# Create app directory
#WORKDIR /usr/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install -g npm@7.3.0
RUN npm --version
RUN node --version
RUN npm install
# If you are building your code for production
#RUN npm install --only=production

# Bundle app source
COPY . .

# for typescript
RUN npm run build
#COPY ormconfig.json ./build/
COPY .env ./build/
WORKDIR ./build

EXPOSE 3500
CMD node src/index.js
