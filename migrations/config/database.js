const config = require('../../app/config/app');

module.exports = {
  development: {
    username: config.mysql.username,
    password: config.mysql.password,
    database: config.mysql.database,
    host: config.mysql.host,
    port: config.mysql.port,
    dialect: 'mysql',
  },
};
