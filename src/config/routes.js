const express = require('express');

module.exports = function(server) {
  // API Routes
  const router = express.Router();
  server.use('/api', router);

  // Todo Routes
  const todoService = require('../todo/todoService');
  todoService.register(router, '/todos');
};
