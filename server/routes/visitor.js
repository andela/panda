const express = require('express');
const router = express.Router();
const visitor = require('../controllers/visitors');

router.route('/')
  .get(visitor.all);

module.exports = router;
