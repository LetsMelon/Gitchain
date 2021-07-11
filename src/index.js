const path = require('path');

const { git, config, cli } = require('./lib');

const changeProfile = async (newProfile) => {
  console.log(`Changed to profile '${newProfile.name}'`);
  await Promise.all(
    newProfile.tags.map((item) => git.config.addConfig(item.key, item.value)),
  );
};

const exitProgram = () => {
  process.exit(0);
};

const main = async () => {
  const configPath = '../config.json';
  const absolutePath = path.normalize(`${__dirname}/${configPath}`);

  console.log(`Load config file from: ${absolutePath}`);

  const gitchainConfig = config.check(config.file.load(absolutePath, true));

  while (true) {
    const { MENU } = await cli.menu();
    if (MENU === 0) {
      const { P_MENU } = await cli.profile.menu(gitchainConfig.profiles);
      await changeProfile(gitchainConfig.profiles[P_MENU]);
      exitProgram();
    } else {
      exitProgram();
    }
  }
};

module.exports = main;
