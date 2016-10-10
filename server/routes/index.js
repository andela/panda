const visitorRoutes = require('./visitors');

module.exports = (router) => {
   visitorRoutes(router);
   return router;
};
