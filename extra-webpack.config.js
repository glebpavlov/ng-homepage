const webpack = require('webpack');
const pkg = require('./package.json');

function getLastCommitDate(format){
  return require('child_process')
    .execSync(`git log -1 --date=format:"${format}" --format="%ad"`)
    .toString().trim()
}

module.exports = (config, options) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      'APP_VERSION': JSON.stringify(pkg.version),
      'LAST_MODIFIED': JSON.stringify(getLastCommitDate('%d.%m.%Y'))
    }),
  );

  return config;
};
