const pkg = require("./package.json");

module.exports.getLastCommitDate = function getLastCommitDate(format) {
  return require('child_process')
    .execSync(`git log -1 --date=format:"${format}" --format="%ad"`)
    .toString().trim()
}


module.exports.getVersion =function getVersion() {
  return pkg.version;
}
