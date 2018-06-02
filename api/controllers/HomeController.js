/**
 * UserController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    saveHome: function (req, res) {
        console.log("first level");
        Home.saveHome(req.body, function (data) {
            res.json(data)
        });
    },

    getHomeList: function (req, res) {
        Home.getHomeList(req.body, function (data) {
            res.json(data)
        });
    },

    getOneHome: function (req, res) {
        Home.getOneHome(req.body, function (data) {
            res.json(data)
        });
    },

    updateHome: function (req, res) {
        Home.updateHome(req.body, function (data) {
            res.json(data)
        });
    },

    deleteHome: function (req, res) {
        Home.deleteHome(req.body, function (data) {
            res.json(data)
        });
    },
};