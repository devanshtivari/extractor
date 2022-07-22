const express = require('express');
const router = express.Router();
const data = require('../controller/datacontroller');
console.log("You are in the main route");

router.get('/' , data);

module.exports = router;