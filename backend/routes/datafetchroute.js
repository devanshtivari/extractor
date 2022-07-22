const express = require('express');
const router = express.Router();
const data = require('../controller/datacontroller');

router.get('/' , data);

module.exports = router;