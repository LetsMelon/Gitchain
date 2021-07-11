const fs = require('fs');

const defaultValues = {
  json: {
    profiles: [],
  },
};

module.exports = (path, filetype) => {
  try {
    fs.writeFileSync(path, JSON.stringify(defaultValues[filetype]), 'utf8');
  } catch (error) {
    console.log(error);
  }
};
