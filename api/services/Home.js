var schema = new Schema({
    title: {
        type: String,
      },
      description: {
        type: String,
      },
      sliderTitle: {
        type: String,
      },
      sliderImages: [{
        image:String,
        imageDescription:String,
        redirectPage:String
      }],
      order: {
        type: Number
      }
});

module.exports = mongoose.model('Home', schema);

/*
    Response obj specifications:(reqObj)
    statusCode : 0=> success ,1=>error ,2=> querySuccessButNoDataFound,
    result : result of the query
*/

var model = {

    saveHome: function (data, callback) {

        var resObj = {};

        var obj = Home(data);
        obj.save(function (error, saved) {
            if (error || saved == undefined) {
                console.log("Home >>> saveHome >>>  error >>> ", error);
                resObj = {
                    statusCode: 1,
                    result: error
                }
                callback(resObj);
            } else {
                if (!_.isEmpty(saved)) {
                    resObj = {
                        statusCode: 0,
                        result: { message: "Home saved successfully" }
                    };
                    callback(resObj);
                }
            }
        });
    },

    getHomeList: function (data, callback) {

        var resObj = {};

        Home.find().exec(function (error, found) {
            if (error || found == undefined) {
                console.log("Home >>> getHomeList >>>  error >>> ", error);
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

    getOneHome: function (data, callback) {
        var resObj = {};

        Home.findOne({ _id: data.id }).exec(function (error, found) {
            if (error || found == undefined) {
                console.log("Home >>> getOneHome >>>  error >>> ", error);
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

    updateHome: function (data, callback) {
        var resObj = {};

        Home.update({ _id: data._id }, data, { new: true }, function (error, updated) {
            if (error || updated == undefined) {
                console.log("Home >>> updateHome >>>  error >>> ", error);
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

    deleteHome: function (data, callback) {
        var resObj = {};

        Home.remove({ _id: data.id }, function (error, deleted) {
            if (error || deleted == undefined) {
                console.log("Home >>> deleteHome >>>  error >>> ", error);
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