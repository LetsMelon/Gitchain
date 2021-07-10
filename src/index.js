const simpleGit = require('simple-git');

const git = simpleGit();

const config = require('../config.json');

const changeProfile = async (newProfile) => {
  console.log(`Change to profile '${newProfile.name}'`);
  for (const tag of newProfile.tags) {
    const {key, value} = tag;
    await git.raw(['config', '--global', key, value]);
  }
}

const main = async () => {
  await changeProfile(config.profiles[0]);
  const gitConfig = await git.listConfig();
  console.log(gitConfig);
};

module.exports = main;
