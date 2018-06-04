var schema = new Schema({
    name: {
        type: String,
    },
    plugins: Schema.Types.Mixed
});

module.exports = mongoose.model('Pages', schema);

/*
    Response obj specifications:(reqObj)
    statusCode : 0=> success ,1=>error ,2=> querySuccessButNoDataFound,
    result : result of the query
*/

var model = {

    savePages: function (data, callback) {

        var resObj = {};

        var obj = Pages(data);
        obj.save(function (error, saved) {
            if (error || saved == undefined) {
                console.log("Pages >>> savePages >>>  error >>> ", error);
                resObj = {
                    statusCode: 1,
                    result: error
                }
                callback(resObj);
            } else {
                if (!_.isEmpty(saved)) {
                    resObj = {
                        statusCode: 0,
                        result: { message: "Pages saved successfully" }
                    };
                    callback(resObj);
                }
            }
        });
    },

    getPagesList: function (data, callback) {

        var resObj = {};

        Pages.find().exec(function (error, found) {
            if (error || found == undefined) {
                console.log("Pages >>> getPagesList >>>  error >>> ", error);
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

    getOnePages: function (data, callback) {
        var resObj = {};

        var findObj =  { _id: data.id };
        if(data.findBy) {
            findObj = data.findBy
        }

        Pages.findOne(findObj).exec(function (error, found) {
            if (error || found == undefined) {
                console.log("Pages >>> getOnePages >>>  error >>> ", error);
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

    updatePages: function (data, callback) {
        var resObj = {};
        Pages.update({ _id: data._id }, data, { new: true }, function (error, updated) {
            if (error || updated == undefined) {
                console.log("Pages >>> updatePages >>>  error >>> ", error);
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

    deletePages: function (data, callback) {
        var resObj = {};

        Pages.remove({ _id: data.id }, function (error, deleted) {
            if (error || deleted == undefined) {
                console.log("Pages >>> deletePages >>>  error >>> ", error);
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