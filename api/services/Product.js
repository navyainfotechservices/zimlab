var schema = new Schema({
    productName: String,
    strength: String,
    therapueticUse: String,
    packPresentation: String,
    productCategory: {
        type: Schema.Types.ObjectId,
        ref: "ProductCategory",
        required: true
    },
    productSubCategory: String,
    dosageForm: String,
    pharmacopiealStatus: String,
    GenericName: String,
    FDFCompliance: String,
    file:String
});

schema.plugin(deepPopulate, {

    populate: {
        'productCategory': {
            select: '_id categoryName'
        }
    }
});

module.exports = mongoose.model('Product', schema);

/*
    Response obj specifications:(reqObj)
    statusCode : 0=> success ,1=>error ,2=> querySuccessButNoDataFound,
    result : result of the query
*/

var model = {

    saveProduct: function (data, callback) {

        var resObj = {};

        var obj = Product(data);
        obj.save(function (error, saved) {
            if (error || saved == undefined) {
                console.log("product >>> saveProduct >>>  error >>> ", error);
                resObj = {
                    statusCode: 1,
                    result: error
                }
                callback(resObj);
            } else {
                if (!_.isEmpty(saved)) {
                    resObj = {
                        statusCode: 0,
                        result: { message: "Product saved successfully" }
                    };
                    callback(resObj);
                }
            }
        });
    },

    getProductList: function (data, callback) {

        var resObj = {};

        Product.find().deepPopulate('productCategory').exec(function (error, found) {
            if (error || found == undefined) {
                console.log("Product >>> getProductList >>>  error >>> ", error);
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


    getOneProduct: function (data, callback) {
        var resObj = {};

        Product.findOne({ _id: data.id }).deepPopulate('productCategory').exec(function (error, found) {
            if (error || found == undefined) {
                console.log("Product >>> getOneProduct >>>  error >>> ", error);
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

    updateProduct: function (data, callback) {
        var resObj = {};

        Product.update({ _id: data._id }, data, { new: true }, function (error, updated) {
            if (error || updated == undefined) {
                console.log("Product >>> updateProduct >>>  error >>> ", error);
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

    deleteProduct: function (data, callback) {
        var resObj = {};

        Product.remove({ _id: data.id }, function (error, deleted) {
            if (error || deleted == undefined) {
                console.log("Product >>> deleteProduct >>>  error >>> ", error);
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