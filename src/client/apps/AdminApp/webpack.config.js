const { clientConfig, serverConfig } = require('../../../../webpack.config.js');

const configs = [
  clientConfig({
    appName: 'AdminApp',
    entry: {
      AdminApp: ['./src/client/apps/AdminApp/client.entry.jsx'],
    },
  }),
  serverConfig({
    appName: 'AdminApp',
    entry: {
      AdminApp: ['./src/client/apps/AdminApp/server.entry.jsx'],
    },
  }),
];

module.exports = configs;
