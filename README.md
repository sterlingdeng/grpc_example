# Example project using gRPC with node.

## What will be build?

A to-do list app with a simple react front-end. The react front end will make HTTP requests to an express server, which will route the requests to a gRPC server that is running on node. This is obviously a round-about way of implementing a simple to-do list, but the purpose lies in creating a gRPC server using node, which performs actions based on the requests from the express web server. The express web server can be thought of as a microservice that specifically handles HTTP requests from the front end, and the gRPC node server can be a microserve that handles the transformation of the data.

## How to start

1. install dependencies using `npm install`
2. run both servers using `node server/web/server.js & node server/grpc-server/grpc-server.js`

### Random

- ignore the dockerfile
- ignore `/web/index.js`
