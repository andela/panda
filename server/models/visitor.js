'use strict';
module.exports = function(sequelize, DataTypes) {
  var Visitor = sequelize.define('Visitor', {
    ip_address: DataTypes.STRING,
    mac_address: DataTypes.STRING,
    id_site: DataTypes.INTEGER,
    arrival_time: DataTypes.DATE,
    departure_time: DataTypes.DATE,
    location: DataTypes.STRING,
    device: DataTypes.STRING,
    browser: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Visitor;
};
