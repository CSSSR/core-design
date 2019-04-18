FROM node:10.15.3 AS build-stage

ARG APP_VERSION
ENV PUBLIC_PATH="/${APP_VERSION}"

WORKDIR /app

COPY package.json .

RUN yarn --freeze-lockfile --no-interactive

COPY .storybook ./.storybook
COPY src ./src
COPY tsconfig.json ./tsconfig.json
COPY babel.config.js ./babel.config.js

RUN yarn run build-storybook -o /app/static

FROM nginx:1.15.10-alpine
ARG APP_VERSION

COPY --from=build-stage /app/static /var/www/html/v$APP_VERSION/
COPY nginx.conf /etc/nginx/nginx.conf
