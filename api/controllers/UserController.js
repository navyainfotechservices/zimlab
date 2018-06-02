/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var CryptoJS = require("crypto-js");

module.exports = {
    emailTo: function (req, res) {
        var sails = req._sails;
        if (_.isEmpty(req.body.email)) {
            req.body.to = "parmarpriyank94@gmail.com"
        }
        if (_.isEmpty(req.body.subject)) {
            req.body.subject = "No Subject";
        }
        // Encrypt 
        // var ciphertext = CryptoJS.AES.encrypt('api key here', '2');
        // ciphertext.toString();
        var bytes = CryptoJS.AES.decrypt(ciphertext, '2');
        var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        var helper = require('sendgrid').mail
        from_email = new helper.Email("parmarpriyank94@gmail.com")
        to_email = new helper.Email(req.body.email)
        var to_mail = [];
        to_mail.push(to_email)
        subject = "My Portfolio : Contact Us form details"
        // content = new helper.Content("text/html","<p>"+ req.body.message+"</p>")
        var sg = require('sendgrid')(plaintext);
        if (_.isEmpty(req.body.cc)) {
            var personalizations = [{
                to: to_mail,
                subject: subject
            }]
        } else {
            cc_email = new helper.Email(req.body.cc)
            var personalizations = [{
                to: to_mail,
                cc: cc_email,
                subject: subject
            }]
        }
        var
            name = "<h4><b>Name</b> : " + req.body.name + "</h4>"
        email = "<h4><b>Email</b> : " + req.body.email + "</h4>"
        mobile = "<h4><b>Mobile</b> : " + req.body.mobile + "</h4>"
        subject = "<h4><b>Subject</b> : " + req.body.subject + "</h4>"
        message = "<h4><b>Message</b> : " + req.body.message + "</h4>";
        var template = name + email + mobile + subject + message;

        var request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: {
                personalizations: personalizations,
                from: from_email,
                content: [{
                    type: 'text/html',
                    value: template
                }]
                // attachments: attachments
            },
        });
        sg.API(request, function (error, response) {
            console.log("response", response);
            if (error) {
                res.jsonx(error);
            } else {
                res.jsonx(response);
            }
        });
    },

    test: function (req, res) {
        console.log("first level");
        User.test(req.body, function (data) {
            res.json(data)
        });
    }
};
