const express = require('express');
const router = express.Router();
const controller = require('../controller/logincontroller');

router.get('/' , controller);

module.exports = router;