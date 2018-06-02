
/**
 * @ngdoc function
 * @name zimlabApp.controller:ProductListCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('ProductListCtrl', function ($scope, NavigationService, $state) {

        //Function to get product categories
        $scope.getProductList = function () {
            NavigationService.getProductList({}, function (data) {
                if (data.statusCode == 0) {
                    $scope.products = data.result;
                } else if (data.statusCode == 2) {
                    alert("no date found");
                } else if (data.statusCode == 1) {
                    alert("error");
                }
            });
        };

        //Firt api call to get product 
        $scope.getProductList();

        //Function to redirect to create product page
        $scope.createProduct = function () {
            $state.go("dashboard.createProduct");
        };

        //Function to redirect to edit product  page
        $scope.editProduct = function (productId) {
            $state.go("dashboard.editProduct", { id: productId });
        };

        //Function  to delete th product 
        $scope.deleteProduct = function (productId) {
            NavigationService.deleteProduct({ id: productId }, function (data) {
                if (data.statusCode == 0) {
                    $scope.products = data.result;
                    $state.reload();
                } else {
                    alert("unable to delete , please try again");
                }
            });
        }
    });