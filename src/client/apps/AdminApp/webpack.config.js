const { clientConfig, serverConfig } = require('../../../../webpack.config.js');

const configs = [
  clientConfig({
    appName: 'AdminApp',
    entry: {
      AdminApp: ['./entry.client.jsx'],
    },
  }),
  serverConfig({
    appName: 'AdminApp',
    entry: {
      AdminApp: ['./entry.server.jsx'],
    },
  }),
];

module.exports = configs;
