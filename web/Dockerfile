# stage1 - build react app first 
FROM node:12.16.1-alpine3.9 as build
WORKDIR /
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /
RUN yarn --silent
COPY . /
RUN yarn build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.17.8-alpine
COPY --from=build /build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]