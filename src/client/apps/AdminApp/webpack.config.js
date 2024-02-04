const { clientConfig, serverConfig } = require('../../../../webpack.config.js');

const configs = [
  clientConfig({
    appName: 'AdminApp',
    entry: {
      AdminApp: ['./client.entry.jsx'],
    },
  }),
  serverConfig({
    appName: 'AdminApp',
    entry: {
      AdminApp: ['./server.entry.jsx'],
    },
  }),
];

module.exports = configs;
