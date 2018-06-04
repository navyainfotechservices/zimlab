/**
 * UserController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    loginUser: function (req, res) {
        User.loginUser(req.body, function (data) {
            res.json(data)
        });
    },

    saveUser: function (req, res) {
        console.log("first level");
        User.saveUser(req.body, function (data) {
            res.json(data)
        });
    },

    getUserList: function (req, res) {
        User.getUserList(req.body, function (data) {
            res.json(data)
        });
    },

    getOneUser: function (req, res) {
        User.getOneUser(req.body, function (data) {
            res.json(data)
        });
    },

    updateUser: function (req, res) {
        User.updateUser(req.body, function (data) {
            res.json(data)
        });
    },

    deleteUser: function (req, res) {
        User.deleteUser(req.body, function (data) {
            res.json(data)
        });
    },
};