const express = require('express');

const app = express();

const adminApp = require('./apps/AdminApp');
const consoleApp = require('./apps/ConsoleApp');
const nextApp = require('./apps/NextApp');

app.use(adminApp.router);
app.use(consoleApp.router);
app.use(nextApp.router);

app.listen(3000, () => {
  console.log('Running on http://localhost:3000/');
});
