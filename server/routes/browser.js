const browser = require('../controllers/browser');

module.exports = (router) => {
  router.route('/reports/browsers')
    .get(browser.all);
};
