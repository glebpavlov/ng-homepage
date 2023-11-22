const webpack = require('webpack');
const {getLastCommitDate, getVersion} = require("./build-info");

module.exports = (config, options) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      'APP_VERSION': JSON.stringify(getVersion()),
      'LAST_MODIFIED': JSON.stringify(getLastCommitDate('%d.%m.%Y'))
    }),
  );

  return config;
};
