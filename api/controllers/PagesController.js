/**
 * UserController
 *
 * @description :: Server-side logic for managing Pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    savePages: function (req, res) {
        Pages.savePages(req.body, function (data) {
            res.json(data)
        });
    },

    getPagesList: function (req, res) {
        Pages.getPagesList(req.body, function (data) {
            res.json(data)
        });
    },

    getOnePages: function (req, res) {
        Pages.getOnePages(req.body, function (data) {
            res.json(data)
        });
    },

    updatePages: function (req, res) {
        Pages.updatePages(req.body, function (data) {
            res.json(data)
        });
    },

    deletePages: function (req, res) {
        Pages.deletePages(req.body, function (data) {
            res.json(data)
        });
    },
};