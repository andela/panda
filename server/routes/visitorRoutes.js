const visitors = require('../controllers/visitors');

// Define routes and map them to controllers
module.exports = (router) => {
  router.route('/reports/visitors')
    .get(visitors.all);
};
