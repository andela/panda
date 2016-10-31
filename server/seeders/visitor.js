'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('visitors', [{
      ip_address: '105.21.32.63',
      mac_address: '7546ed87lo9ukcx',
      id_site: 1,
      arrival_time: new Date(),
      departure_time: new Date(Date.now()+2),
      location: 'Kenya',
      device: 'Laptop',
      browser: 'Chrome',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ip_address: '105.21.32.62',
      mac_address: '7546edbgui87lo9ukcx',
      id_site: 2,
      arrival_time: new Date(),
      departure_time: new Date(Date.now()+2),
      location: 'Kenya',
      device: 'Laptop',
      browser: 'Mozilla',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ip_address: '103.21.32.63',
      mac_address: '75yctdre646ed87lo9ukcx',
      id_site: 3,
      arrival_time: new Date(),
      departure_time: new Date(Date.now()+5),
      location: 'Uganda',
      device: 'Laptop',
      browser: 'Chrome',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ip_address: '102.21.32.63',
      mac_address: '75yctdre646ed87lo9ukcx',
      id_site: 2,
      arrival_time: new Date(),
      departure_time: new Date(Date.now()+5),
      location: 'Tanzania',
      device: 'android',
      browser: 'Opera Mini',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ip_address: '153.21.32.63',
      mac_address: '7546ed87lo9ukcx',
      id_site: 3,
      arrival_time: new Date(),
      departure_time: new Date(Date.now()+1),
      location: 'Indonesia',
      device: 'Laptop',
      browser: 'Firefox',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ip_address: '243.21.32.63',
      mac_address: '987654dftgy',
      id_site: 3,
      arrival_time: new Date(),
      departure_time: new Date(Date.now()+1),
      location: 'Germany',
      device: 'Laptop',
      browser: 'Chrome',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ip_address: '105.21.32.62',
      mac_address: '7546edbgui87lo9ukcx',
      id_site: 2,
      arrival_time: new Date(),
      departure_time: new Date(Date.now()+2),
      location: 'Kenya',
      device: 'Laptop',
      browser: 'Mozilla',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ip_address: '103.21.32.63',
      mac_address: '75yctdre646ed87lo9ukcx',
      id_site: 3,
      arrival_time: new Date(),
      departure_time: new Date(Date.now()+3),
      location: 'Uganda',
      device: 'Laptop',
      browser: 'Chrome',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ip_address: '102.21.32.63',
      mac_address: '75yctdre646ed87lo9ukcx',
      id_site: 2,
      arrival_time: new Date(),
      departure_time: new Date(Date.now()+4),
      location: 'Tanzania',
      device: 'android',
      browser: 'Opera Mini',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ip_address: '153.21.32.63',
      mac_address: '7546ed87lo9ukcx',
      id_site: 3,
      arrival_time: new Date(),
      departure_time: new Date(Date.now()+5),
      location: 'Indonesia',
      device: 'Laptop',
      browser: 'Firefox',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ip_address: '243.21.32.63',
      mac_address: '987654dftgy',
      id_site: 3,
      arrival_time: new Date(),
      departure_time: new Date(Date.now()+3),
      location: 'Germany',
      device: 'Laptop',
      browser: 'Chrome',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Visitor', null, {});
  }
};
