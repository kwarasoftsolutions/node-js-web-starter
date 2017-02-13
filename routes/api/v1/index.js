'use strict';

const express = require('express');
const router = express.Router();

router.use('/', require('./index/'));
router.use('/users', require('./users/'));
router.use('/marketing', require('./marketing/'));
router.use('/search', require('./search/'));

module.exports = router;
