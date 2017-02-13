'use strict';

const express = require('express');
const router = express.Router();

router.use('/lists', require('./lists.js'));
router.use('/doctors', require('./doctors.js'));


module.exports = router;
