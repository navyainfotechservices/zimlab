var schema = new Schema({
    categoryName: String,
    categoryImage: String,
    file: String,
    order: Number,
    categoryNote: [
        { note: String }
    ],
    subCategory: [
        {
            name: String
        }
    ]
});

module.exports = mongoose.model('ProductCategory', schema);

/*
    Response obj specifications:(reqObj)
    statusCode : 0=> success ,1=>error ,2=> querySuccessButNoDataFound,
    result : result of the query
*/

var model = {

    saveProductCategory: function (data, callback) {

        var resObj = {};

        var obj = ProductCategory(data);
        obj.save(function (error, saved) {
            if (error || saved == undefined) {
                console.log("ProductCategory >>> saveProductCategory >>>  error >>> ", error);
                resObj = {
                    statusCode: 1,
                    result: error
                }
                callback(resObj);
            } else {
                if (!_.isEmpty(saved)) {
                    resObj = {
                        statusCode: 0,
                        result: { message: "ProductCategory saved successfully" }
                    };
                    callback(resObj);
                } else {
                    resObj = {
                        statusCode: 2,
                        result: { message: "Unable to save category" }
                    };
                    callback(resObj);
                }
            }
        });
    },

    getProductCategory: function (data, callback) {
        var resObj = {};

        ProductCategory.find().sort({ order: 1 }).exec(function (error, found) {
            if (error || found == undefined) {
                console.log("ProductCategory >>> getProductCategory >>>  error >>> ", error);
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

    getOneProductCategory: function (data, callback) {
        var resObj = {};

        ProductCategory.findOne({ _id: data.id }).exec(function (error, found) {
            if (error || found == undefined) {
                console.log("ProductCategory >>> getOneProductCategory >>>  error >>> ", error);
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

    updateProductCategory: function (data, callback) {
        var resObj = {};

        ProductCategory.update({ _id: data._id }, data, { new: true }, function (error, updated) {
            if (error || updated == undefined) {
                console.log("ProductCategory >>> updateProductCategory >>>  error >>> ", error);
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

    deleteProductCategory: function (data, callback) {
        var resObj = {};

        ProductCategory.remove({ _id: data.id }, function (error, deleted) {
            if (error || deleted == undefined) {
                console.log("ProductCategory >>> deleteProductCategory >>>  error >>> ", error);
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