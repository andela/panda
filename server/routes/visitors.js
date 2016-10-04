// Dependencies
const router = require('express').Router();

// Controllers
const visitors = require('../controller/visitors');

// Define routes and mapping them to controllers
router.route('/')
  .get(visitors.all);


module.exports = router;
