'use strict';
const express = require('express');
const router = express.Router();
var dotenv = require('dotenv');//
dotenv.config();


router.use('/', require('./dashboard.js'));
router.use('/lists', require('./mailinglists.js'));
router.use('/campaigns', require('./campaigns.js'));



module.exports = router;
