/* eslint-disable global-require */
const path = require('path');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

const dirname = __dirname;

const babelLoaderRule = {
  test: /\.(jsx|js)$/,
  exclude: [/node_modules/, /\.global\.js$/, /\.min\.js$/],
  include: path.resolve(dirname, 'src/client'),
  use: [
    {
      loader: 'babel-loader',
      options: {
        configFile: path.resolve(__dirname, 'babel.config.js'),
      },
    },
  ],
};

const clientConfig = {
  name: 'client',
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  target: 'web',
  stats: 'minimal',
  watchOptions: {
    ignored: /node_modules/,
  },
  entry: ['./src/client/apps/AdminApp/client.entry.jsx'],
  output: {
    path: path.resolve(dirname, 'dist/client'),
    publicPath: `/`,
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json', 'css'],
    modules: [path.resolve(dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [babelLoaderRule],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      ignoreOrder: true,
    }),
    new WebpackAssetsManifest({
      publicPath: `/`,
      output: 'manifest.json',
    }),
  ],
};

const serverConfig = {
  name: 'server',
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  target: 'node',
  entry: ['./src/client/apps/AdminApp/server.entry.jsx'],
  stats: 'minimal',
  watchOptions: {
    ignored: /node_modules/,
  },
  node: {
    __dirname: true,
    __filename: true,
  },
  output: {
    path: path.resolve(dirname, 'dist/server'),
    publicPath: `/`,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json', 'css'],
    modules: [path.resolve(dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [babelLoaderRule],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      ignoreOrder: true,
    }),
  ],
  externalsPresets: { node: true },
  externals: [nodeExternals()],
};

const configs = [clientConfig, serverConfig];
module.exports = configs;
