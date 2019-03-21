const express = require('express');
const path = require('path');
const app = express();
const { runGetList } = require('./grpc-client');

app.use('/build', express.static(path.resolve(__dirname, '../../build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/index.html'));
});

app.get('/getList', (req, res) => {
  runGetList(res);
});

app.post('/add', (req, res) => {
  //
});

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
