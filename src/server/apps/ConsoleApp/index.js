const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

const FILE_BASE_PATH = '../../../../dist/ConsoleApp';
const staticFilePath = path.join(__dirname, FILE_BASE_PATH, 'client');

const hasBuild = fs.existsSync(staticFilePath);
if (hasBuild) {
  // 빌드된 static 파일 서빙
  router.use(express.static(staticFilePath));
  // route
  const app = require('./App');
  router.get('/console', app.renderApp);
}

module.exports = {
  router,
};
