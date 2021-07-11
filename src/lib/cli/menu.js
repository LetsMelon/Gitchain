const { simpleList } = require('./functions');

module.exports = () => {
  const choices = ['Use profile', 'Exit'];
  return simpleList('MENU', 'Your selection:', choices);
};
