var schema = new Schema({
    bannerName: String,
    bannerText: String,
    file: String
});

module.exports = mongoose.model('Banner', schema);

/*
    Response obj specifications:(reqObj)
    statusCode : 0=> success ,1=>error ,2=> querySuccessButNoDataFound,
    result : result of the query
*/

var model = {

    saveBanner: function (data, callback) {

        var resObj = {};

        var obj = Banner(data);
        obj.save(function (error, saved) {
            if (error || saved == undefined) {
                console.log("banner >>> saveBanner >>>  error >>> ", error);
                resObj = {
                    statusCode: 1,
                    result: error
                }
                callback(resObj);
            } else {
                if (!_.isEmpty(saved)) {
                    resObj = {
                        statusCode: 0,
                        result: { message: "Banner saved successfully" }
                    };
                    callback(resObj);
                }
            }
        });
    },

    getBannerList: function (data, callback) {

        var resObj = {};

        Banner.find().exec(function (error, found) {
            if (error || found == undefined) {
                console.log("Banner >>> getBannerList >>>  error >>> ", error);
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
                        result: { message: "No data found" }
                    };
                    callback(resObj);
                }
            }
        });
    },


    getOneBanner: function (data, callback) {
        var resObj = {};

        Banner.findOne({ _id: data.id }).exec(function (error, found) {
            if (error || found == undefined) {
                console.log("Banner >>> getOneBanner >>>  error >>> ", error);
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
                        result: { message: "No data found" }
                    };
                    callback(resObj);
                }
            }
        });
    },

    updateBanner: function (data, callback) {
        var resObj = {};

        Banner.update({ _id: data._id }, data, { new: true }, function (error, updated) {
            if (error || updated == undefined) {
                console.log("Banner >>> updateBanner >>>  error >>> ", error);
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
                        result: { message: "No data found" }
                    };
                    callback(resObj);
                }
            }
        });
    },

    deleteBanner: function (data, callback) {
        var resObj = {};

        Banner.remove({ _id: data.id }, function (error, deleted) {
            if (error || deleted == undefined) {
                console.log("Banner >>> deleteBanner >>>  error >>> ", error);
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
                        result: { message: "No data found" }
                    };
                    callback(resObj);
                }
            }
        });
    },
};

module.exports = _.assign(module.exports, exports, model);