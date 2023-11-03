### STAGE 1:BUILD ###
FROM node:18.12 AS build
WORKDIR /dist/src/app
RUN npm cache clean --force
COPY . .
RUN yarn install
RUN yarn run build:prod


### STAGE 2:RUN ###
FROM nginx:latest AS ngi
COPY --from=build /dist/src/app/dist/test-alliance-taiga /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
