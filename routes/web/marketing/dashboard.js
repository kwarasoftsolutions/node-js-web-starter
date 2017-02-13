'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../../../utilities/authchecker.js');
var dotenv = require('dotenv');//
dotenv.config();


router.get('/', auth,function (req, res, next) {

    let title = process.env.APPLICATION_TITLE;
    let userJson = req.user._json;
    let name = req.user.displayName;


    res.render('marketing/index', {
        title: title,
        user: {
            name: name,
            image: userJson.image.url
        }
    });
});

module.exports = router;
