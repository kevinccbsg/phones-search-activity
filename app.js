const express = require('express');
const debug = require('debug');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');

const app = express();

app.get('/', (req, res) => {
  debug('GET /');
  res.status(200).json({
    data: 0,
  });
});

module.exports = app;
