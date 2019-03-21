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

const todo = grpc.loadPackageDefinition(packageDefinition).todo;
console.log(todo);

const client = new todo.ListActions(
  'localhost:50052',
  grpc.credentials.createInsecure()
);
console.log(client);

/**
 *
 * @param {function} cb called to perform actions using the list data
 */

function runGetList(res) {
  client.GetList({}, (err, list) => {
    if (err) {
      throw err;
    }
    console.log(list);
    res.json(list.items);
  });
}

exports.runGetList = runGetList;