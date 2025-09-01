FROM node:22-alpine AS build

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY /src /app/src
COPY index.html /app
COPY eslint.config.js /app
COPY vite.config.js /app

RUN npm install

RUN npm run build

FROM build

WORKDIR /app

COPY --from=build /app/dist /app

RUN npm i -g serve

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]