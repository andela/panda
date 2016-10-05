'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Visitors', {
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
        allowNull: false,
        type: Sequelize.INTEGER
      },
      arrival_time: {
        allowNull: false,
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
    return queryInterface.dropTable('Visitors');
  }
};
