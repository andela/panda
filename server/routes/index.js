const visitorRoutes = require('./visitors');

const router = (app) => {
  app.use('/api/reports/visitors', visitorRoutes);
};

module.exports = router;
