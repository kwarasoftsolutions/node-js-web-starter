'use strict';

const path = require('path');
const dbPath = path.join(__dirname,'../data');
const data = require('diskdb').connect(dbPath,['specialties']);
const request = require('request');

var Repository = function () {

    this.getAllSpecialties = function (cb) {
        let ret = []
        ret = data.specialties.find();
        return cb(null,ret); 
    
    },

    this.getDoctorbyName = function (name,location,cb) {

        var host = 'https://api.betterdoctor.com/2016-03-01/doctors?';

        var query = 'name=' + name + '&location=' + location + '&fields=profile(first_name%2Clast_name%2Ctitle%2Cimage_url)%2Cspecialties(name)%2Cpractices&skip=0&limit=50&';
        var apikey = 'user_key=37f160fedc7fd46d1e097b265f0f8edc';

        var endpoint = host + query + apikey;
            request.get({ url: endpoint }, function (error, response, body) {
                let ret = [];
                if (error)
                {
                    cb(error, null);
                }
                else
                {
                    if (response.statusCode == 200)
                    {
                        ret = JSON.parse(body);
                        return cb(null, ret.data)
                    }

                }

            });
        },
    this.getDoctorbySpecialty = function (specialty, location, cb) {

            var host = 'https://api.betterdoctor.com/2016-03-01/doctors?';
        //(profile(first_name,last_name,title,image_url),specialties(name),practices
            var query = 'specialty=' + specialty + '&location=' + location + '&fields=profile(first_name%2Clast_name%2Ctitle%2Cimage_url)%2Cspecialties(name)%2Cpractices&skip=0&limit=50&';
            var apikey = 'user_key=37f160fedc7fd46d1e097b265f0f8edc';

        //specialty_uid=' + specialty + '&location=37.773%2C-122.413%2C100' + location + '&fields=profile(first_name%2Clast_name%2Ctitle%2Cimage_url)%2Cspecialties(name)%2Cpractices&skip=0&limit=50&;
            var endpoint = host + query + apikey;
            request.get({ url: endpoint }, function (error, response, body) {
                let ret = [];
                if (error)
                {
                    cb(error, null);
                }
                else
                {
                    if (response.statusCode == 200)
                    {
                        ret = JSON.parse(body);
                        return cb(null, ret.data)
                    }

                }

            });
        }
}





module.exports = Repository;
