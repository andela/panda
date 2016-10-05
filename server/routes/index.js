const visitors = require('./visitorRoutes');

module.exports = (router) => {
   visitors(router);
   return router;
};
