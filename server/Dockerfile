FROM node:current

WORKDIR /usr/app/server

COPY ["package.json", "package-lock.json", "/usr/app/server/"]

RUN npm install

COPY [".", "/usr/app/server"]

RUN npm run build

COPY [".env", "./build"]

WORKDIR ./build

EXPOSE 5000

CMD ["node", "src/index.js"]
