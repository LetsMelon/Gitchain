const simpleGit = require('simple-git');

const git = simpleGit();

const addConfig = async (key, value, global = true) =>
  git.raw(['config', `${global ? '--global' : '--local'}`, key, value]);

module.exports = addConfig;
