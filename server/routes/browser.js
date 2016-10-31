const express = require('express');
const router = express.Router();
const browser = require('../controllers/browser');

router.route('/')
  .get(browser.all);

module.exports = router;
