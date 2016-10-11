const express = require('express');
const router = express.Router();
const device = require('../controllers/device');

router.route('/')
  .get(device.all);

module.exports = router;
