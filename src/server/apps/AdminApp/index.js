const path = require('path');
const express = require('express');
const router = express.Router();

const AdminApp = require('./App');

const FILE_BASE_PATH = '../../../../dist/AdminApp';

router.get('/admin', AdminApp.renderApp);

module.exports = {
  router,
  static: express.static(path.join(__dirname, FILE_BASE_PATH, 'client')),
};
