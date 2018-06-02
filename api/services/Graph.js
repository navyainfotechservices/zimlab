var schema = new Schema({
    deemedExport: Number,
    export: Number,
    govdom: Number,
    year: Number
});

module.exports = mongoose.model('Graph', schema);

/*
    Response obj specifications:(reqObj)
    statusCode : 0=> success ,1=>error ,2=> querySuccessButNoDataFound,
    result : result of the query
*/

var model = {

    saveGraph: function (data, callback) {

        var resObj = {};

        var obj = Graph(data);
        obj.save(function (error, saved) {
            if (error || saved == undefined) {
                console.log("product >>> saveGraph >>>  error >>> ", error);
                resObj = {
                    statusCode: 1,
                    result: error
                }
                callback(resObj);
            } else {
                if (!_.isEmpty(saved)) {
                    resObj = {
                        statusCode: 0,
                        result: { message: "Graph saved successfully" }
                    };
                    callback(resObj);
                }
            }
        });
    },

    getGraphList: function (data, callback) {

        var resObj = {};

        Graph.find().exec(function (error, found) {
            if (error || found == undefined) {
                console.log("Graph >>> getGraphList >>>  error >>> ", error);
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

    getOneGraph: function (data, callback) {
        var resObj = {};

        Graph.findOne({ _id: data.id }).exec(function (error, found) {
            if (error || found == undefined) {
                console.log("Graph >>> getOneGraph >>>  error >>> ", error);
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

    updateGraph: function (data, callback) {
        var resObj = {};

        Graph.update({ _id: data._id }, data, { new: true }, function (error, updated) {
            if (error || updated == undefined) {
                console.log("Graph >>> updateGraph >>>  error >>> ", error);
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

    deleteGraph: function (data, callback) {
        var resObj = {};

        Graph.remove({ _id: data.id }, function (error, deleted) {
            if (error || deleted == undefined) {
                console.log("Graph >>> deleteGraph >>>  error >>> ", error);
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