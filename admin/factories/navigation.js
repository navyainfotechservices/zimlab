angular.module('zimlabApp').factory('NavigationService', function ($http) {
    //var adminurl = "http://localhost:1337/";
    // var adminurl = "http://104.197.192.46:1337/";
    var adminurl = "http://35.198.244.0:1337/";

    return {
        getNavigation: function () {
            return navigation;
        },
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

        //Product category 
        getProductCategory: function (formData, callback) {
            $http.post(adminurl + 'ProductCategory/getProductCategory', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        saveProductCategory: function (formData, callback) {
            $http.post(adminurl + 'ProductCategory/saveProductCategory', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        getOneProductCategory: function (formData, callback) {
            $http.post(adminurl + 'ProductCategory/getOneProductCategory', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        updateProductCategory: function (formData, callback) {
            $http.post(adminurl + 'ProductCategory/updateProductCategory', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        deleteProductCategory: function (formData, callback) {
            $http.post(adminurl + 'ProductCategory/deleteProductCategory', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        //Product page
        saveProduct: function (formData, callback) {
            $http.post(adminurl + 'Product/saveProduct', formData).then(function (data) {
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

        updateProduct: function (formData, callback) {
            $http.post(adminurl + 'Product/updateProduct', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        deleteProduct: function (formData, callback) {
            $http.post(adminurl + 'Product/deleteProduct', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        getOneProduct: function (formData, callback) {
            $http.post(adminurl + 'Product/getOneProduct', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },


        //Banner page
        saveBanner: function (formData, callback) {
            $http.post(adminurl + 'Banner/saveBanner', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        getBannerList: function (formData, callback) {
            $http.post(adminurl + 'Banner/getBannerList', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        updateBanner: function (formData, callback) {
            $http.post(adminurl + 'Banner/updateBanner', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        deleteBanner: function (formData, callback) {
            $http.post(adminurl + 'Banner/deleteBanner', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        getOneBanner: function (formData, callback) {
            $http.post(adminurl + 'Banner/getOneBanner', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },


        //FinancialYear page
        saveFinancialYear: function (formData, callback) {
            $http.post(adminurl + 'FinancialYear/saveFinancialYear', formData).then(function (data) {
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

        updateFinancialYear: function (formData, callback) {
            $http.post(adminurl + 'FinancialYear/updateFinancialYear', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        deleteFinancialYear: function (formData, callback) {
            $http.post(adminurl + 'FinancialYear/deleteFinancialYear', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },


        getOneFinancialYear: function (formData, callback) {
            $http.post(adminurl + 'FinancialYear/getOneFinancialYear', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },


        //Graph 
        saveGraph: function (formData, callback) {
            $http.post(adminurl + 'Graph/saveGraph', formData).then(function (data) {
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

        updateGraph: function (formData, callback) {
            $http.post(adminurl + 'Graph/updateGraph', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        deleteGraph: function (formData, callback) {
            $http.post(adminurl + 'Graph/deleteGraph', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        getOneGraph: function (formData, callback) {
            $http.post(adminurl + 'Graph/getOneGraph', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        //New api
        //Pages
        getPagesList: function (formData, callback) {
            $http.post(adminurl + 'Pages/getPagesList', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        savePages: function (formData, callback) {
            $http.post(adminurl + 'Pages/savePages', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        updatePages: function (formData, callback) {
            $http.post(adminurl + 'Pages/updatePages', formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        }

    };
});
