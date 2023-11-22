### STAGE 1:BUILD ###
FROM node:20.9.0 AS build
WORKDIR /dist/src/app
COPY . .
RUN yarn config set network-timeout 300000
RUN yarn install
RUN export NODE_OPTIONS="--max-old-space-size=8192" && yarn run build:prod


### STAGE 2:RUN ###
FROM nginx:latest AS ngi
COPY --from=build /dist/src/app/dist/ng-homepage /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
