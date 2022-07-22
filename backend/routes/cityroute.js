const express = require('express');
const router = express.Router();
const citydata = require('../controller/citydatacontroller');
console.log("You have been routed successfully")

router.get('/' , citydata);


module.exports = router;