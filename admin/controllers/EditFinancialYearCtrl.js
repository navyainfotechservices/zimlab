
/**
 * @ngdoc function
 * @name zimlabApp.controller:EditFinancialYearCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('EditFinancialYearCtrl', function ($scope, NavigationService, $state, $stateParams) {

        $scope.financialYear = {};
        $scope.financialYear.quarters = [];
        $scope.extensions = ["pdf", "jpg", "jpeg", "bmp", "png", "tiff"]; // file upload directive


        //Function to get one financialYear  to edit
        $scope.getOneFinancialYear = function () {
            var id = $stateParams.id;
            if (id) {
                NavigationService.getOneFinancialYear({ id: id }, function (data) {
                    if (data.statusCode == 0) {
                        $scope.financialYear = data.result;
                    } else {
                        $state.go('dashboard.financialYearList');
                    }
                });
            }
        };
        $scope.getOneFinancialYear();

        // Function to create product category
        $scope.updateFinancialYear = function (value) {

            NavigationService.updateFinancialYear(value, function (data) {
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

        //Function to return financialYearList page
        $scope.goBack = function () {
            $state.go('dashboard.financialYearList');
        };
    });