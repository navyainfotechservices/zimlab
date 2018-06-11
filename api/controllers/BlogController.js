/**
 * UserController
 *
 * @description :: Server-side logic for managing Blogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var CryptoJS = require("crypto-js");

module.exports = {
    saveBlog: function (req, res) {
        console.log("first level");
        Blog.saveBlog(req.body, function (data) {
            res.json(data)
        });
    },

    getBlogList: function (req, res) {
        Blog.getBlogList(req.body, function (data) {
            res.json(data)
        });
    },

    getOneBlog: function (req, res) {
        Blog.getOneBlog(req.body, function (data) {
            res.json(data)
        });
    },

    updateBlog: function (req, res) {
        Blog.updateBlog(req.body, function (data) {
            res.json(data)
        });
    },

    deleteBlog: function (req, res) {
        Blog.deleteBlog(req.body, function (data) {
            res.json(data)
        });
    },
};
