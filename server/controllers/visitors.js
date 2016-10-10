const { Visitor } = require('../models');

module.exports = {
  all: (req, res) => {
    let startDate = new Date(req.query.start);
    let endDate;
    const query = {};
    if (req.query.start && req.query.end) {
      endDate = new Date(req.query.end);
      query.where = {
        arrival_time: {gte: startDate},
        departure_time: {lt: endDate}
      };
    } else if (req.query.start && !req.query.end) {
      endDate = new Date(Date.now());
      query.where = {
        arrival_time: {gte: startDate},
        departure_time: {lt: endDate}
      };
    }

    Visitor
      .findAll({
        where: query.where,
        attributes: ['ip_address', 'arrival_time', 'location', 'browser', 'device', 'departure_time'],
        limit: parseInt(req.query.limit, 10) || 10,
        offset: parseInt(req.query.offset, 10) || 0
      }).then((visitors) => {
        res.json(visitors);
      });
    }
};
