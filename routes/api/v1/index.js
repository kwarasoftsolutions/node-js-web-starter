'use strict';

const express = require('express');
const router = express.Router();

router.use('/', require('./index/'));
router.use('/users', require('./users/'));

module.exports = router;
