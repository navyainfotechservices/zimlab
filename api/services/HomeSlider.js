var schema = new Schema({
    image: {
        type: String,
    },
    description: {
        type: String,
    }, 
    order: {
        type: Number
    }
});

module.exports = mongoose.model('HomeSlider', schema);

/*
    Response obj specifications:(reqObj)
    statusCode : 0=> success ,1=>error ,2=> querySuccessButNoDataFound,
    result : result of the query
*/

var model = {

    saveHomeSlider: function (data, callback) {

        var resObj = {};

        var obj = HomeSlider(data);
        obj.save(function (error, saved) {
            if (error || saved == undefined) {
                console.log("HomeSlider >>> saveHomeSlider >>>  error >>> ", error);
                resObj = {
                    statusCode: 1,
                    result: error
                }
                callback(resObj);
            } else {
                if (!_.isEmpty(saved)) {
                    resObj = {
                        statusCode: 0,
                        result: {
                            message: "HomeSlider saved successfully"
                        }
                    };
                    callback(resObj);
                }
            }
        });
    },

    getHomeSliderList: function (data, callback) {

        var resObj = {};

        HomeSlider.find().exec(function (error, found) {
            if (error || found == undefined) {
                console.log("HomeSlider >>> getHomeSliderList >>>  error >>> ", error);
                resObj = {
                    statusCode: 1,
                    result: error
                }
                callback(resObj);
            } else {
                if (!_.isEmpty(found)) {
                    resObj = {
                        statusCode: 0,
                        result: found
                    };
                    callback(resObj);
                } else {
                    resObj = {
                        statusCode: 2,
                        result: {
                            message: "No data found"
                        }
                    };
                    callback(resObj);
                }
            }
        });
    },

    getOneHomeSlider: function (data, callback) {
        var resObj = {};

        HomeSlider.findOne({
            _id: data.id
        }).exec(function (error, found) {
            if (error || found == undefined) {
                console.log("HomeSlider >>> getOneHomeSlider >>>  error >>> ", error);
                resObj = {
                    statusCode: 1,
                    result: error
                }
                callback(resObj);
            } else {
                if (!_.isEmpty(found)) {
                    resObj = {
                        statusCode: 0,
                        result: found
                    };
                    callback(resObj);
                } else {
                    resObj = {
                        statusCode: 2,
                        result: {
                            message: "No data found"
                        }
                    };
                    callback(resObj);
                }
            }
        });
    },

    updateHomeSlider: function (data, callback) {
        var resObj = {};

        HomeSlider.update({
            _id: data._id
        }, data, {
            new: true
        }, function (error, updated) {
            if (error || updated == undefined) {
                console.log("HomeSlider >>> updateHomeSlider >>>  error >>> ", error);
                resObj = {
                    statusCode: 1,
                    result: error
                }
                callback(resObj);
            } else {
                if (!_.isEmpty(updated)) {
                    resObj = {
                        statusCode: 0,
                        result: updated
                    };
                    callback(resObj);
                } else {
                    resObj = {
                        statusCode: 2,
                        result: {
                            message: "No data found"
                        }
                    };
                    callback(resObj);
                }
            }
        });
    },

    deleteHomeSlider: function (data, callback) {
        var resObj = {};

        HomeSlider.remove({
            _id: data.id
        }, function (error, deleted) {
            if (error || deleted == undefined) {
                console.log("HomeSlider >>> deleteHomeSlider >>>  error >>> ", error);
                resObj = {
                    statusCode: 1,
                    result: error
                }
                callback(resObj);
            } else {
                if (!_.isEmpty(deleted)) {
                    resObj = {
                        statusCode: 0,
                        result: deleted
                    };
                    callback(resObj);
                } else {
                    resObj = {
                        statusCode: 2,
                        result: {
                            message: "No data found"
                        }
                    };
                    callback(resObj);
                }
            }
        });
    },

};

module.exports = _.assign(module.exports, exports, model);