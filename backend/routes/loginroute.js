const express = require('express');
const router = express.Router();
const controller = require('../controller/logincontroller');
console.log("you are in login route")

router.post('/' , controller);

module.exports = router;