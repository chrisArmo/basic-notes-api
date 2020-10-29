const chalk = require('chalk');

module.exports = handler => (...args) =>
  Promise.resolve(handler(...args))
    .then(result => result)
    .catch(({ message }) =>
      console.log(chalk.redBright.italic(message)));
