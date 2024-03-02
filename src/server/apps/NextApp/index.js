const fs = require('fs');
const path = require('path');

const express = require('express');
const router = express.Router();

const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;

const app = next({
  dev,
  hostname,
  port,
  dir: path.join(__dirname, '../../../../src/client/apps/NextApp'),
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  router.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });
});

module.exports = {
  router,
};
