'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('visitors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ip_address: {
        type: Sequelize.STRING
      },
      mac_address: {
        type: Sequelize.STRING
      },
      id_site: {
        type: Sequelize.INTEGER
      },
      arrival_time: {
        type: Sequelize.DATE
      },
      departure_time: {
        type: Sequelize.DATE
      },
      location: {
        type: Sequelize.STRING
      },
      device: {
        type: Sequelize.STRING
      },
      browser: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('visitors');
  }
};