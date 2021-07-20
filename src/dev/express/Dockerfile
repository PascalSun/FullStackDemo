FROM node:14
WORKDIR /app
COPY ../express /app/
RUN yarn
RUN yarn global add nodemon --prefix /usr/local
CMD ["nodemon", "--exec", "yarn", "start"]