const express = require('express');
const debug = require('debug')('PHONE:app');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

const models = require('./mockData');

const app = express();

app.use(helmet());
app.use(compression());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/phones', (req, res) => {
  res.status(200).json({
    data: models,
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname, 'public', 'index.html');
});

module.exports = app;
