/**
 * UserController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var CryptoJS = require("crypto-js");

module.exports = {
    saveProduct: function (req, res) {
        console.log("first level");
        Product.saveProduct(req.body, function (data) {
            res.json(data)
        });
    },

    getProductList: function (req, res) {
        Product.getProductList(req.body, function (data) {
            res.json(data)
        });
    },

    getOneProduct: function (req, res) {
        Product.getOneProduct(req.body, function (data) {
            res.json(data)
        });
    },

    updateProduct: function (req, res) {
        Product.updateProduct(req.body, function (data) {
            res.json(data)
        });
    },

    deleteProduct: function (req, res) {
        Product.deleteProduct(req.body, function (data) {
            res.json(data)
        });
    },
};
