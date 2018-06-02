
/**
 * @ngdoc function
 * @name zimlabApp.controller:ProductCategoryCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('ProductCategoryCtrl', function ($scope, NavigationService, $state) {

        //Function to get product categories
        $scope.getProductCategory = function () {
            NavigationService.getProductCategory({}, function (data) {
                if (data.statusCode == 0) {
                    $scope.category = data.result;
                } else if (data.statusCode == 2) {
                    alert("no date found");
                } else if (data.statusCode == 1) {
                    alert("error");
                }
            });
        };

        //Firt api call to get product category
        $scope.getProductCategory();

        //Function to redirect to create product page
        $scope.createProductCategory = function () {
            $state.go("dashboard.createProductCategory");
        };

        //Function to redirect to edit product category page
        $scope.editProductCategory = function (productCategoryId) {
            $state.go("dashboard.editProductCategory", { id: productCategoryId });
        };

        //Function  to delete th product category
        $scope.deleteProductCategory = function (productCategoryId) {
            NavigationService.deleteProductCategory({ id: productCategoryId }, function (data) {
                if (data.statusCode == 0) {
                    $scope.category = data.result;
                    $state.reload();
                } else {
                    alert("unable to delete category, please try again");
                }
            });
        }
    });