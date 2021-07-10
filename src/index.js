const config = require('../config.json');

const { git } = require('./lib');

const changeProfile = async (newProfile) => {
  console.log(`Change to profile '${newProfile.name}'`);
  for (const tag of newProfile.tags) {
    const { key, value } = tag;
    await git.config.addConfig(key, value);
  }
};

const main = async () => {
  await changeProfile(config.profiles[0]);
  const gitConfig = await git.config.getConfig.all();
  console.log(gitConfig);
};

module.exports = main;
