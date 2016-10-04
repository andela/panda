const { Visitor } = require('../models');

module.exports = {
  all: (req, res) => {
    Visitor
      .findAll({attributes: ['ip_address', 'arrival_time', 'location', 'browser', 'device', 'departure_time']})
      .then((visitors) => {
        res.json(visitors);
      });
    }
};
