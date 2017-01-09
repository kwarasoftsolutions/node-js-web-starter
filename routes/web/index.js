'use strict';

const express = require('express');
const router = express.Router();

router.use('/', require('./home/'));
router.use('/users', require('./users/'));
router.use('/styles', require('./styles/'));
router.use('/auth', require('./auth/'));
module.exports = router;
