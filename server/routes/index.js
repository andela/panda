// Dependencies
const router = require('express').Router();

// routes
const visitors = require('./visitors');

// Routes
router.use('/reports/visitors', visitors);

module.exports = router;
