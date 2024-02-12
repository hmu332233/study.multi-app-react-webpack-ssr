const { clientConfig, serverConfig } = require('../../../../webpack.config.js');

const configs = [
  clientConfig({
    appName: 'ConsoleApp',
    entry: {
      ConsoleApp: ['./entry.client.jsx'],
    },
  }),
  serverConfig({
    appName: 'ConsoleApp',
    entry: {
      ConsoleApp: ['./entry.server.jsx'],
    },
  }),
];

module.exports = configs;
