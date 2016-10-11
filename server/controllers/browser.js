const models = require('../models');
const sequelize = require('sequelize');

module.exports = {
  all: function(req, res) {
    models.visitor
      .findAll({
        attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'users'], 'browser'],
        group: ['browser'],
        limit: parseInt(req.query.limit) || 10,
        offset: parseInt(req.query.offset) || 0
      })
      .then(function(results) {
        res.send({results});
      });
  }
};
