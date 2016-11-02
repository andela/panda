const express = require('express');
const router = express.Router();
const visitor = require('../controllers/visitors');

router.route('/')
  .get(visitor.all);

router.route('/:attributes')
  .post(visitor.create);

module.exports = router;
