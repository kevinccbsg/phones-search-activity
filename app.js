const express = require('express');
const debug = require('debug')('PHONE:app');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

const models = require('./mockData');

const app = express();

app.use(helmet())
app.use(compression())

app.get('/', (req, res) => {
  debug('GET /'); 
  res.status(200).json({
    data: 0,
  });
});

app.use('/api/phones', (req, res) => {
  res.status(200).json({
    data: models,
  });
});

module.exports = app;
