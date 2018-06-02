var schema = new Schema({
    quarters: [{
        quartersNumber: String,
        revenue: Number,
        operatingCost: Number,
        ebitdaMargin: Number,
        ebitda: Number
    }],
    year: Number,
    revenue: Number,
    operatingCost: Number,
    ebitdaMargin: Number,
    ebitda: Number,
    isCurrentYear: Boolean
});

module.exports = mongoose.model('FinancialYear', schema);

/*
    Response obj specifications:(reqObj)
    statusCode : 0=> success ,1=>error ,2=> querySuccessButNoDataFound,
    result : result of the query
*/

var model = {

    saveFinancialYear: function (data, callback) {

        var resObj = {};

        var obj = FinancialYear(data);
        obj.save(function (error, saved) {
            if (error || saved == undefined) {
                console.log("product >>> saveFinancialYear >>>  error >>> ", error);
                resObj = {
                    statusCode: 1,
                    result: error
                }
                callback(resObj);
            } else {
                if (!_.isEmpty(saved)) {
                    resObj = {
                        statusCode: 0,
                        result: { message: "FinancialYear saved successfully" }
                    };
                    callback(resObj);
                }
            }
        });
    },

    getFinancialYearList: function (data, callback) {

        var resObj = {};

        FinancialYear.find().exec(function (error, found) {
            if (error || found == undefined) {
                console.log("FinancialYear >>> getFinancialYearList >>>  error >>> ", error);
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

    getCurrentFinancialYear: function (data, callback) {
        var resObj = {};

        FinancialYear.findOne({ isCurrentYear: true }).exec(function (error, found) {

            if (error || found == undefined) {

                console.log("FinancialYear >>> getCurrentFinancialYear >>>  error >>> ", error);
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

    getOneFinancialYear: function (data, callback) {
        var resObj = {};

        FinancialYear.findOne({ _id: data.id }).exec(function (error, found) {
            if (error || found == undefined) {
                console.log("FinancialYear >>> getOneFinancialYear >>>  error >>> ", error);
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

    updateFinancialYear: function (data, callback) {
        var resObj = {};

        FinancialYear.update({ _id: data._id }, data, { new: true }, function (error, updated) {
            if (error || updated == undefined) {
                console.log("FinancialYear >>> updateFinancialYear >>>  error >>> ", error);
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

    deleteFinancialYear: function (data, callback) {
        var resObj = {};

        FinancialYear.remove({ _id: data.id }, function (error, deleted) {
            if (error || deleted == undefined) {
                console.log("FinancialYear >>> deleteFinancialYear >>>  error >>> ", error);
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