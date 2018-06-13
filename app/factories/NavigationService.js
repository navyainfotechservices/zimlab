angular.module('zimlabApp').factory('NavigationService', function ($http) {
    //var adminurl = "http://localhost:1337/";
    // var adminurl = "http://104.197.192.46:1337/";
    var adminurl = "http://35.198.244.0:1337/";
    

    return {
        // getNavigation: function () {
        //     return navigation;
        // },
        boxCall: function (url, callback) {
            $http.post(adminurl + url).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        apiCall: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        delete: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        getProductCategory: function (formData, callback) {
            $http.post(adminurl + 'ProductCategory/getProductCategory', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        getProductList: function (formData, callback) {
            $http.post(adminurl + 'Product/getProductList', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        getFinancialYearList: function (formData, callback) {
            $http.post(adminurl + 'FinancialYear/getFinancialYearList', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        getCurrentFinancialYear: function (formData, callback) {
            $http.post(adminurl + 'FinancialYear/getCurrentFinancialYear', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        getGraphList: function (formData, callback) {
            $http.post(adminurl + 'Graph/getGraphList', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
    };
});
