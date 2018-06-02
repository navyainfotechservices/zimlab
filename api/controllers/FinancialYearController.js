/**
 * UserController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var CryptoJS = require("crypto-js");

module.exports = {
    saveFinancialYear: function (req, res) {
        FinancialYear.saveFinancialYear(req.body, function (data) {
            res.json(data)
        });
    },

    getFinancialYearList: function (req, res) {
        FinancialYear.getFinancialYearList(req.body, function (data) {
            res.json(data)
        });
    },

    getOneFinancialYear: function (req, res) {
        FinancialYear.getOneFinancialYear(req.body, function (data) {
            res.json(data)
        });
    },

    getCurrentFinancialYear: function (req, res) {
        FinancialYear.getCurrentFinancialYear(req.body, function (data) {
            res.json(data)
        });
    },

    updateFinancialYear: function (req, res) {
        FinancialYear.updateFinancialYear(req.body, function (data) {
            res.json(data)
        });
    },

    deleteFinancialYear: function (req, res) {
        FinancialYear.deleteFinancialYear(req.body, function (data) {
            res.json(data)
        });
    },
};
