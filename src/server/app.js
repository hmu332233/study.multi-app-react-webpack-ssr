const express = require('express');

const app = express();

const adminApp = require('./apps/AdminApp');
const consoleApp = require('./apps/ConsoleApp');

app.use(adminApp.router);
app.use(adminApp.static);

app.use(consoleApp.router);
app.use(consoleApp.static);

app.listen(3000, () => {
  console.log('Running on http://localhost:3000/');
});
