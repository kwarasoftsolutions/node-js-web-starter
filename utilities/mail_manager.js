'use strict';
const dotenv = require('dotenv');
dotenv.config();
const sendgrid = require('sendgrid')(process.env.SENDGRID_API_KEY);



var mailAPI = function () {


    this.createCampaign = function (data, cb) {

        var req = sendgrid.emptyRequest();
        req.body = data;
        req.method = 'POST';
        req.path = '/v3/campaigns';
        sendgrid.API(req, function (error, resp) {


            if (error)
            {
                cb(error, null);
            }
            else
            {
                cb(null, resp.body);

            }


        });

    }

}

module.exports = mailAPI;