const { simpleList } = require('./functions');

const menu = (profiles) => {
  const choices = profiles.map((item) => item.name);
  return simpleList('P_MENU', 'Which profile?', choices);
};

module.exports = { menu };
