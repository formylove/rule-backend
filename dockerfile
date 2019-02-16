FROM node
MAINTAINER Teige
VOLUME /app
EXPOSE 3000
WORKDIR /app

ENTRYPOINT ["npm","start"]