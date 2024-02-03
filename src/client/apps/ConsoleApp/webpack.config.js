const { clientConfig, serverConfig } = require('../../../../webpack.config.js');

const configs = [
  clientConfig({
    appName: 'ConsoleApp',
    entry: {
      ConsoleApp: ['./src/client/apps/ConsoleApp/client.entry.jsx'],
    },
  }),
  serverConfig({
    appName: 'ConsoleApp',
    entry: {
      ConsoleApp: ['./src/client/apps/ConsoleApp/server.entry.jsx'],
    },
  }),
];

module.exports = configs;
