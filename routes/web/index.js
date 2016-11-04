'use strict';
const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {

    res.render('web/index', {title: 'Web Starter'});
});

module.exports = router;
