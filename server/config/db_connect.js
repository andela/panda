(function() {
  'use strict';
  const Sequelize = require('sequelize');
  const config = require('./db_config');
  var connection;

  if (process.env.DATABASE_URL) {
    connection = new Sequelize(process.env.DATABASE_URL);
  } else {
    connection = new Sequelize(
      config.database.database,
      config.database.username,
      config.database.password, {
        port: config.database.port,
        dialect: config.database.dialect
      });
  }
  connection
    .sync({ force: true });

})();
