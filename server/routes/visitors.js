const visitors = require('../controllers/visitors');

// Define routes and mapping them to controllers
module.exports = (router) => {
  router.route('/reports/visitors')
    .get(visitors.all);
};
