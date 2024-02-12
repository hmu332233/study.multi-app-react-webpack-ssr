const path = require('path');
const express = require('express');
const router = express.Router();

const AdminApp = require('./App');

const FILE_BASE_PATH = '../../../../dist/AdminApp';

// 빌드된 static 파일 서빙
router.use(express.static(path.join(__dirname, FILE_BASE_PATH, 'client'))),
  // route
  router.get('/admin', AdminApp.renderApp);

module.exports = {
  router,
};
