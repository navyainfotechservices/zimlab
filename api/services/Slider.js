var schema = new Schema({
    image: {
        type: String,
      },
      description: {
        type: String,
      },
      url: {
        type: String,
      },
      order: {
        type: Number
      },
});

module.exports = mongoose.model('Slider', schema);

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
                        statusCode: 1,
                        result: { message: "Product saved successfully" }
                    };
                    callback(resObj);
                }
            }
        });
    }
};

module.exports = _.assign(module.exports, exports, model);