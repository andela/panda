const browserRoutes = require('./browser');

module.exports = (router) => {
  browserRoutes(router);

  return router;
};
