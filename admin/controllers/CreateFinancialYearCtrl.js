
/**
 * @ngdoc function
 * @name zimlabApp.controller:CreateProductCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('CreateFinancialYearCtrl', function ($scope, NavigationService, $state) {

        $scope.financialYear = {};
        $scope.financialYear.quarters = [];
        $scope.extensions = ["pdf", "jpg", "jpeg", "bmp", "png", "tiff"]; // file upload directive


        // Function to create FinancialYear 
        $scope.saveFinancialYear = function (value) {

            NavigationService.saveFinancialYear(value, function (data) {
                if (data.statusCode == 0) {
                    $state.go('dashboard.financialYearList');
                } else {
                    alert("unable to save Financial Year");
                }
            });
        };

        //To reset the page
        $scope.reset = function () {
            $scope.financialYear = {};
        };

        //Function to return product category list page
        $scope.goBack = function () {
            $state.go('dashboard.financialYearList');
        };
    });