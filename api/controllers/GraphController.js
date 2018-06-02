/**
 * UserController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var CryptoJS = require("crypto-js");

module.exports = {
    saveGraph: function (req, res) {
        Graph.saveGraph(req.body, function (data) {
            res.json(data)
        });
    },

    getGraphList: function (req, res) {
        Graph.getGraphList(req.body, function (data) {
            res.json(data)
        });
    },

    getOneGraph: function (req, res) {
        Graph.getOneGraph(req.body, function (data) {
            res.json(data)
        });
    },

    updateGraph: function (req, res) {
        Graph.updateGraph(req.body, function (data) {
            res.json(data)
        });
    },

    deleteGraph: function (req, res) {
        Graph.deleteGraph(req.body, function (data) {
            res.json(data)
        });
    },
};
