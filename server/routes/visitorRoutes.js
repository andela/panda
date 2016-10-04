// Controllers
const visitors = require('../controller/visitors');

// Define routes and mapping them to controllers
module.exports = (router) => {
  router.route('/reports/visitors')
    .get(visitors.all);
};
