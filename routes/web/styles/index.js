'use strict';
const express = require('express');
const router = express.Router();
var dotenv = require('dotenv');//
dotenv.config();


router.get('/', function (req, res, next) {

    res.render('web/stylelibrary/index', { title: process.env.APPLICATION_TITLE });
});

module.exports = router;
