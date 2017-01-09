'use strict';

const express = require('express');
const router = express.Router();

router.use('/', require('./web/'));
router.use('/api/v1', require('./api/v1/index.js'));

module.exports = router;
