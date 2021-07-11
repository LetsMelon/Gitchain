const inquirer = require('inquirer');

module.exports = async (name, message, choices) =>
  inquirer.prompt([
    {
      name,
      type: 'list',
      message,
      choices,
      filter: function (val) {
        for (let i = 0; i < choices.length; i += 1) {
          if (choices[i] === val) return i;
        }
        return -1;
      },
    },
  ]);
