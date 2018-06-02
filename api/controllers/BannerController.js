/**
 * UserController
 *
 * @description :: Server-side logic for managing banners
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var CryptoJS = require("crypto-js");

module.exports = {
    saveBanner: function (req, res) {
        console.log("first level");
        Banner.saveBanner(req.body, function (data) {
            res.json(data)
        });
    },

    getBannerList: function (req, res) {
        Banner.getBannerList(req.body, function (data) {
            res.json(data)
        });
    },

    getOneBanner: function (req, res) {
        Banner.getOneBanner(req.body, function (data) {
            res.json(data)
        });
    },

    updateBanner: function (req, res) {
        Banner.updateBanner(req.body, function (data) {
            res.json(data)
        });
    },

    deleteBanner: function (req, res) {
        Banner.deleteBanner(req.body, function (data) {
            res.json(data)
        });
    },
};
