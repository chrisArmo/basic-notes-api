require('dotenv').config();
require('./config/db-connection')();

const chalk = require('chalk'),
  express = require('express');

const logger = require('./middleware/logger'),
  { NODE_ENV, PORT } = require('./config/environments');

const app = express();

if (NODE_ENV === 'development') {
  logger(app);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(chalk.greenBright(
    `basic notes api running on port ${PORT} in ${NODE_ENV} mode`
  ))
});
