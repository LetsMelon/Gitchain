const fs = require('fs');

const createFile = require('./create');

const supportedFiletypes = ['.json'];

module.exports = (path, create) => {
  if (!fs.existsSync(path)) {
    if (create) {
      createFile(path, 'json');
    } else {
      throw new Error(`'${path}' does not exist`);
    }
  }
  supportedFiletypes.forEach((item) => {
    if (!path.endsWith(item))
      throw new Error(`'${path}': is not a ${item} file`);
  });
  return JSON.parse(fs.readFileSync(path));
};
