const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('../middleware/cors');
const console = require('../utils/console');

// Configs
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'prod';

// Middlewears
server.use(bodyParser.urlencoded({ extend: true }));
server.use(bodyParser.json());
server.use(cors);

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }

  console(port, env);
});

module.exports = server;
