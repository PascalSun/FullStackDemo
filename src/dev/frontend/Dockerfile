FROM node:14.16.0-alpine3.12
WORKDIR /app
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN cd / && git clone https://github.com/vishnubob/wait-for-it.git wait-for-it
RUN yarn add react-scripts@3.4.1 -g --silent
RUN yarn global add cross-env
ADD dev/frontend /sh
ADD frontend /app
RUN yarn
