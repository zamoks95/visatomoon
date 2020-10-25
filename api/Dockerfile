# stage1 - build react app first 
FROM node:12.16.1-alpine3.9 as build
WORKDIR /
ENV PATH /app/node_modules/.bin:$PATH
COPY . /
RUN yarn install --silent

# stage 2 - build the final image and copy the react build files
EXPOSE 3003
CMD ["node", "index.js"]