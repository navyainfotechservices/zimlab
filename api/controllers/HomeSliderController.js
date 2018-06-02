/**
 * UserController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    saveHomeSlider: function (req, res) {
        HomeSlider.saveHomeSlider(req.body, function (data) {
            res.json(data)
        });
    },

    getHomeSliderList: function (req, res) {
        HomeSlider.getHomeSliderList(req.body, function (data) {
            res.json(data)
        });
    },

    getOneHomeSlider: function (req, res) {
        HomeSlider.getOneHomeSlider(req.body, function (data) {
            res.json(data)
        });
    },

    updateHomeSlider: function (req, res) {
        HomeSlider.updateHomeSlider(req.body, function (data) {
            res.json(data)
        });
    },

    deleteHomeSlider: function (req, res) {
        HomeSlider.deleteHomeSlider(req.body, function (data) {
            res.json(data)
        });
    },
};