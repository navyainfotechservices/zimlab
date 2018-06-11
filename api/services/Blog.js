var schema = new Schema({
  name: String,
  tags: [],
  document: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Blog', schema);

/*
  Response obj specifications:(reqObj)
  statusCode : 0=> success ,1=>error ,2=> querySuccessButNoDataFound,
  result : result of the query
*/

var model = {

  saveBlog: function (data, callback) {

    var resObj = {};

    var obj = Blog(data);
    obj.save(function (error, saved) {
      if (error || saved == undefined) {
        console.log("Blog >>> saveBlog >>>  error >>> ", error);
        resObj = {
          statusCode: 1,
          result: error
        }
        callback(resObj);
      } else {
        if (!_.isEmpty(saved)) {
          resObj = {
            statusCode: 0,
            result: { message: "Blog saved successfully" }
          };
          callback(resObj);
        }
      }
    });
  },

  getBlogList: function (data, callback) {

    var resObj = {};

    Blog.find().exec(function (error, found) {
      if (error || found == undefined) {
        console.log("Blog >>> getBlogList >>>  error >>> ", error);
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


  getOneBlog: function (data, callback) {
    var resObj = {};

    Blog.findOne({ _id: data.id }).exec(function (error, found) {
      if (error || found == undefined) {
        console.log("Blog >>> getOneBlog >>>  error >>> ", error);
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

  updateBlog: function (data, callback) {
    var resObj = {};

    Blog.update({ _id: data._id }, data, { new: true }, function (error, updated) {
      if (error || updated == undefined) {
        console.log("Blog >>> updateBlog >>>  error >>> ", error);
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

  deleteBlog: function (data, callback) {
    var resObj = {};

    Blog.remove({ _id: data.id }, function (error, deleted) {
      if (error || deleted == undefined) {
        console.log("Blog >>> deleteBlog >>>  error >>> ", error);
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