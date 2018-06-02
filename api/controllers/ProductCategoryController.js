/**
 * UserController
 *
 * @description :: Server-side logic for managing products category
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var CryptoJS = require("crypto-js");

module.exports = {
    saveProductCategory: function (req, res) {
        ProductCategory.saveProductCategory(req.body, function (data) {
            res.json(data)
        });
    },

    getProductCategory: function (req, res) {
        ProductCategory.getProductCategory(req.body, function (data) {
            res.json(data)
        });
    },

    getOneProductCategory: function (req, res) {
        ProductCategory.getOneProductCategory(req.body, function (data) {
            res.json(data)
        });
    },

    updateProductCategory: function (req, res) {
        ProductCategory.updateProductCategory(req.body, function (data) {
            res.json(data)
        });
    },

    deleteProductCategory: function (req, res) {
        ProductCategory.deleteProductCategory(req.body, function (data) {
            res.json(data)
        });
    },
};
