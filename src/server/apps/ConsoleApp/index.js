const path = require('path');
const express = require('express');
const router = express.Router();

const ConsoleApp = require('./App');

const FILE_BASE_PATH = '../../../../dist/ConsoleApp';

// 빌드된 static 파일 서빙
router.use(express.static(path.join(__dirname, FILE_BASE_PATH, 'client')));

// route
router.get('/console', ConsoleApp.renderApp);

module.exports = {
  router,
};
