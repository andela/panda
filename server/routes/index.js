const deviceRoutes = require('./device');
const visitorRoutes = require('./visitor');
const browserRoutes = require('./browser');
const loginRoutes = require('./login');
const signupRoutes = require('./signup');

const router = (app) => {
  app.use('/api/signup', signupRoutes);
  app.use('/api/login', loginRoutes);
  app.use('/api/reports/devices', deviceRoutes);
  app.use('/api/reports/visitors', visitorRoutes);
  app.use('/api/reports/browsers', browserRoutes);
};

module.exports = router;
