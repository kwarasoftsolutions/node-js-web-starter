'use strict';

const express = require('express');
const router = express.Router();

router.use('/campaigns', require('./campaigns.js'));
router.use('/mailinglists', require('./mailinglists.js'));


module.exports = router;
