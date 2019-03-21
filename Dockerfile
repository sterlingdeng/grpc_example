FROM node:alpine
RUN apk update && apk add bash && apk add curl && apk add git
WORKDIR /
COPY . .
RUN npm install
EXPOSE 5000
ENV NODE_ENV=production
RUN npm run build
CMD [ "node", "./server/index.js" ]