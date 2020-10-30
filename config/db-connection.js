const chalk = require('chalk'),
  mongoose = require('mongoose');

const asyncHandler = require('../middleware/async-handler'),
  { MONGO_URL } = require('../config/environments');

module.exports = asyncHandler(async () => {
  const conn = await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  console.log(
    chalk.yellowBright.bold(`successfully connected to ${conn.connection.host}`)
  );

  return conn;
});
