module.exports = function(err, data,message) {
    var req = this.req;
    var res = this.res;
    var sails = req._sails;
    if (err) {
        res.json({
            error: err,
            value: false,
            message:"Sorry, Something went wrong. Try Again.!!!"
        });
    } else if (!_.isEmpty(data)) {
        res.json({
            data: data,
            value: true,
            message:message
        });
    } else {
        res.json({
            error: "No Data Found",
            value: false,
            message:"Sorry, Something went wrong. Try Again.!!!"
        });
    }
};
    