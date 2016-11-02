const models = require('../models');

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
    models.visitor
      .findAll({
        // where: query.where,
        attributes: ['ip_address', 'arrival_time', 'location', 'browser', 'device', 'departure_time'],
        limit: parseInt(req.query.limit, 10) || 10,
        offset: parseInt(req.query.offset, 10) || 0
      }).then((visitors) => {
        res.json(visitors);
      });
    },
    create: (req, res) => {
      let details = JSON.parse(req.params.attributes);
      const ip_address = details.ip_address;
      let location;
      // use jquery to request for location using attained ip_address
      require('jsdom').env('', function(err, window) {
          if (err) {
              return err;
          }
          var $ = require('jquery')(window);

      $.ajax( {
        url: `http://freegeoip.net/json/${ip_address}`,
        type: 'POST',
        dataType: 'jsonp',
        success: function(response) {
          location = response.country_name;
        }
      });
      });

      models.visitor.build({
        id_site: details.site,
        ip_address: details.ip_address,
        arrival_time: details.arrival_time,
        browser: details.browser,
        location: location
      })
      .save()
      .catch((err) => {
        res.status(500).json(err);
      });
    }

};
