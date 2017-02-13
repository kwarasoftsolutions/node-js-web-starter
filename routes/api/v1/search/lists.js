'use strict';

const express = require('express');
const repo = require('../../../../repository/repository.js');

const router = express.Router();
let db = new repo();

router.get('/specialties', function (req, res, next) {
    var users = [];
    db.getAllSpecialties(function (err, resp) {

        users = resp;
        res.json({ data: users });
    })
   
});

module.exports = router;
