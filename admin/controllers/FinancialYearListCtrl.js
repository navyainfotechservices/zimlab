
/**
 * @ngdoc function
 * @name zimlabApp.controller:FinancialYearListCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('FinancialYearListCtrl', function ($scope, NavigationService, $state) {

        //Function to get product categories
        $scope.getFinancialYearList = function () {
            NavigationService.getFinancialYearList({}, function (data) {
                if (data.statusCode == 0) {
                    $scope.financialYear = data.result;
                } else if (data.statusCode == 2) {
                    alert("no date found");
                } else if (data.statusCode == 1) {
                    alert("error");
                }
            });
        };

        //Firt api call to get product 
        $scope.getFinancialYearList();

        //Function to redirect to create product page
        $scope.createFinancialYear = function () {
            $state.go("dashboard.createFinancialYear");
        };

        //Function to redirect to edit product  page
        $scope.editFinancialYear = function (financialYearId) {
            $state.go("dashboard.editFinancialYear", { id: financialYearId });
        };

        //Function  to delete th product 
        $scope.deleteFinancialYear = function (financialYearId) {
            NavigationService.deleteFinancialYear({ id: financialYearId }, function (data) {
                if (data.statusCode == 0) {
                    $scope.financialYear = data.result;
                    $state.reload();
                } else {
                    alert("unable to delete , please try again");
                }
            });
        }
    });