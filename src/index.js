import express from 'express';
const server = express();
const port = 3000;

server.get('/hello', function (req, res) {
  res.send('Hello World with Modules!');
});

server.listen(port, function () {
  console.log('Listening on ' + port);
});
