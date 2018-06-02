'use strict';
/**
 * @ngdoc function
 * @name zimlabApp.controller:CorporateInformationCtrl
 * @description
 * # CorporateInformationCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('CorporateInformationCtrl', function CorporateInformationCtrl($scope, NavigationService) {

        // Financial year high chart details.

        //Function to get graph
        $scope.getGraphList = function () {
            NavigationService.getGraphList({}, function (data) {
                console.log("graph data", data.result[0].deemedExport);
                if (data.statusCode == 0) {
                    $scope.financialYearChart = {};
                    $scope.financialYearChart.one = [{
                        name: 'Deemed Export',
                        y: data.result[0].deemedExport,
                        selected: true
                    }, {
                        name: 'Gov/ Dom.',
                        y: data.result[0].govdom
                    }, {
                        name: 'Export',
                        y: data.result[0].export
                    }];

                    $scope.financialYearChart.two = [{
                        name: 'Deemed Export',
                        y: data.result[1].deemedExport,
                        selected: true
                    }, {
                        name: 'Gov/ Dom.',
                        y: data.result[1].govdom
                    }, {
                        name: 'Export',
                        y: data.result[1].export
                    }];

                    $scope.firstFinancialYearGraph = data.result[0].year;
                    $scope.secondFinancialYearGraph = data.result[1].year;
                }
            });
        };

        $scope.getGraphList();


        //Function to get product categories
        $scope.getFinancialYearList = function () {
            NavigationService.getFinancialYearList({}, function (data) {
                if (data.statusCode == 0) {
                    $scope.financialYear = data.result;
                    console.log("$scope.FinancialYear", $scope.FinancialYear);
                } else if (data.statusCode == 2) {
                    alert("no date found");
                } else if (data.statusCode == 1) {
                    // alert("error");
                }
            });
        };

        //Firt api call to get product FinancialYear
        $scope.getFinancialYearList();


        $scope.getCurrentFinancialYear = function () {
            NavigationService.getCurrentFinancialYear({}, function (data) {
                if (data.statusCode == 0) {
                    $scope.OneFinancialYear = data.result;
                } else if (data.statusCode == 2) {
                    // alert("no date found");
                } else if (data.statusCode == 1) {
                    // alert("error");
                }
            });
        };

        $scope.getCurrentFinancialYear();

    });