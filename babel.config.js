function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web');
}

function isWebpack(caller) {
  return Boolean(caller && caller.name === 'babel-loader');
}

module.exports = (api) => {
  const web = api.caller(isWebTarget);
  const webpack = api.caller(isWebpack);

  const presets = [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        useBuiltIns: web ? 'entry' : undefined,
        targets: web ? undefined : { node: 'current' },
        modules: webpack ? false : 'commonjs',
        corejs: '3.6',
      },
    ],
  ];

  const plugins = [];

  return {
    presets,
    plugins,
  };
};
