var schema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  }
});

module.exports = mongoose.model('User', schema);

/*
  Response obj specifications:(reqObj)
  statusCode : 0=> success ,1=>error ,2=> querySuccessButNoDataFound,
  result : result of the query
*/

var model = {
  loginUser: function (data, callback) {
    var resObj = {};
    User.findOne({
      email:data.email
    }).exec(function (error, found) {
      if (error) {
        console.log("User >>> loginUser >>>  error >>> ", error);
        resObj = {
          statusCode: 1,
          result: error
        }
        callback(resObj);
      } else {
        if (!_.isEmpty(found)) {
          //- Check email and password
          User.findOne({
            email:data.email,
            password:data.password
          }).exec(function (error, found) {
            if (error) {
              console.log("User >>> loginUser >>>  error >>> ", error);
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
                    message: "Email or Password invalid"
                  }
                };
                callback(resObj);
              }
            }
          });
        } else {
          resObj = {
            statusCode: 2,
            result: {
              message: "User not registered in the system."
            }
          };
          callback(resObj);
        }
      }
    });
  },

  saveUser: function (data, callback) {

    var resObj = {};

    var obj = User(data);
    obj.save(function (error, saved) {
      if (error || saved == undefined) {
        console.log("User >>> saveUser >>>  error >>> ", error);
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
              message: "User saved successfully"
            }
          };
          callback(resObj);
        }
      }
    });
  },

  getUserList: function (data, callback) {

    var resObj = {};

    User.find().exec(function (error, found) {
      if (error || found == undefined) {
        console.log("User >>> getUserList >>>  error >>> ", error);
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

  getOneUser: function (data, callback) {
    var resObj = {};

    User.findOne({
      _id: data.id
    }).exec(function (error, found) {
      if (error || found == undefined) {
        console.log("User >>> getOneUser >>>  error >>> ", error);
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

  updateUser: function (data, callback) {
    var resObj = {};

    User.update({
      _id: data._id
    }, data, {
      new: true
    }, function (error, updated) {
      if (error || updated == undefined) {
        console.log("User >>> updateUser >>>  error >>> ", error);
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

  deleteUser: function (data, callback) {
    var resObj = {};

    User.remove({
      _id: data.id
    }, function (error, deleted) {
      if (error || deleted == undefined) {
        console.log("User >>> deleteUser >>>  error >>> ", error);
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