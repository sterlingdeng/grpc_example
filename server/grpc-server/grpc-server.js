const path = require('path');
const PROTO_PATH = path.resolve(__dirname, '../protos/todo.proto');
const grpc = require('grpc');
const async = require('async');

const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const todo_proto = grpc.loadPackageDefinition(packageDefinition).todo;

const toDoList = [{ item: 'clean the house' }, { item: 'do laundry' }];

function GetList(call, callback) {
  console.log('getting list');
  callback(null, { items: toDoList });
}

function getServer() {
  const server = new grpc.Server();
  server.addService(todo_proto.ListActions.service, {
    GetList: GetList
  });
  return server;
}

if (require.main === module) {
  var routeServer = getServer();
  routeServer.bind('0.0.0.0:50052', grpc.ServerCredentials.createInsecure());
  routeServer.start();
}

exports.getServer = getServer;
