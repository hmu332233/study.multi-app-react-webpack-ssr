const path = require('path');
const express = require('express');
const router = express.Router();

const ConsoleApp = require('./App');

const FILE_BASE_PATH = '../../../../dist/ConsoleApp';

router.get('/console', ConsoleApp.renderApp);

module.exports = {
  router,
  static: express.static(path.join(__dirname, FILE_BASE_PATH, 'client')),
};
