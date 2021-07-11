const { git, config, cli } = require('./lib');

const changeProfile = async (newProfile) => {
  console.log(`Change to profile '${newProfile.name}'`);
  for (const tag of newProfile.tags) {
    const { key, value } = tag;
    await git.config.addConfig(key, value);
  }
};

const main = async () => {
  const configPath = '../config.json';
  const gitchainConfig = config.check(require(configPath));

  while (true) {
    const { MENU } = await cli.menu();
    if (MENU === 0) {
      // TODO
    } else {
      process.exit(0);
    }
  }
};

module.exports = main;
