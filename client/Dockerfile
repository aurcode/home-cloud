FROM node:current

WORKDIR /usr/app/client

RUN npm install serve -g

COPY ["package.json", "package-lock.json", "/usr/app/client/"]

RUN npm install

COPY [".", "/usr/app/client"]

RUN npm run build

WORKDIR ./dist

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]
