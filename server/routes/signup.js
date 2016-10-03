const express = require('express');
const router = express.Router();
const authentication = require('../controllers/authenticate');

// router.post('/', authentication.signup);
router.route('/').post( authentication.signup);


module.exports = router;
