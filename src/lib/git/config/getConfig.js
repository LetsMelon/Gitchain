const simpleGit = require('simple-git');

const git = simpleGit();

const byKey = async (key) => git.raw(['config', '--get', key]);

const all = async () => git.listConfig();

module.exports = { byKey, all };
