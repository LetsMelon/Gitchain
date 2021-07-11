const inquirer = require('inquirer');

module.exports = () => {
  const choices = [
    'Use profile',
    'Show profiles',
    'Add profile',
    'Delete profile',
    'Exit',
  ];

  const questions = [
    {
      name: 'MENU',
      type: 'list',
      message: 'Your selection:',
      choices,
      filter: function (val) {
        for (let i = 0; i < choices.length; i += 1) {
          if (choices[i] === val) return i;
        }
        return -1;
      },
    },
  ];

  return inquirer.prompt(questions);
};
