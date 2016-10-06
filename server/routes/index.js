const signupRoutes = require('./signup.js');
const loginRoutes = require('./login.js');

const router = (app) => {
  app.use('/signup', signupRoutes);
  app.use('/login', loginRoutes);
};

module.exports = router;
