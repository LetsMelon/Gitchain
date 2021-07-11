const { Config } = require('./schemas');

module.exports = (json) => Config.validateSync(json);
