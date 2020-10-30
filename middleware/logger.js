const chalk = require('chalk'),
  morgan = require('morgan');

module.exports = app => {
  if ('use' in app && typeof app.use === 'function') {
    app.use(morgan(
      `${chalk.blueBright.bold(':method')} ` +
      `${chalk.blue(':url')} ` +
      `${chalk.yellowBright.bold(':status')} -> ` +
      `${chalk.magentaBright(':response-time ms')}`
    ))
  }
};
