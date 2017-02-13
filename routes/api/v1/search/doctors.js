'use strict';

const express = require('express');
const repo = require('../../../../repository/repository.js');

const router = express.Router();
let db = new repo();

router.get('/state/:stateName', function (req, res, next) {

    let stateName = req.params.stateName;
    var doctors = [];
    db.getDoctor("location",stateName,function (err, resp) {

        doctors = resp;
        res.json({ data: doctors });
    })
   
});

router.get('/specialty/:specialtyuid/:location', function (req, res, next) {

    let specialty_uid = req.params.specialtyuid;
    let location = req.params.location;
    var doctors = [];
    db.getDoctorbySpecialty( specialty_uid,location, function (err, resp) {

        doctors = resp;
        res.json({ data: doctors });
    })

});


router.get('/name/:name/:location', function (req, res, next) {

    let doctor_name = req.params.name;
    let location = req.params.location;
    var doctors = [];
    db.getDoctorbyName(doctor_name, location, function (err, resp) {

        doctors = resp;
        res.json({ data: doctors });
    })

});


module.exports = router;
