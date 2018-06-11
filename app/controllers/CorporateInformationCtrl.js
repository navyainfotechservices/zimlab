'use strict';
/**
 * @ngdoc function
 * @name zimlabApp.controller:CorporateInformationCtrl
 * @description
 * # CorporateInformationCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('CorporateInformationCtrl', function CorporateInformationCtrl($scope, NavigationService, $sce) {

        // Financial year high chart details.
        $scope.corporateInfoObj = {};
        $scope.managementInfo = {};
        $scope.management = {};
        $scope.graphData = [];
        $scope.graphYears = [];

        //Function to get graph
        // $scope.getGraphList = function () {
        //     NavigationService.getGraphList({}, function (data) {
        //         // console.log("graph data", data.result[0].deemedExport);
        //         if (data.statusCode == 0) {
        $scope.financialYearChart = {};
        $scope.financialYearChart.one = [{
            name: 'Deemed Export',
            y: 40,
            selected: true
        }, {
            name: 'Gov/ Dom.',
            y: 40
        }, {
            name: 'Export',
            y: 20
        }];

        $scope.financialYearChart.two = [{
            name: 'Deemed Export',
            y: 20,
            selected: true
        }, {
            name: 'Gov/ Dom.',
            y: 40
        }, {
            name: 'Export',
            y: 40
        }];

        $scope.firstFinancialYearGraph = 2017;
        $scope.secondFinancialYearGraph = 2018;
        // }
        //     });
        // };

        // $scope.getGraphList();

        $scope.getCorporateInfo = function () {
            NavigationService.apiCall('pages/getOnePages', {
                findBy: { name: "Corporate Info" }
            }, function (data) {
                if (data.statusCode == 0) {
                    // console.log("corpporate info : ",corporateInfoObj);
                    _.map(data.result.plugins.graph, function (val) {
                        var graphObj = {
                            data: [{
                                name: 'Deemed Export',
                                y: val.deemedExport,
                                selected: true
                            }, {
                                name: 'Gov/ Dom.',
                                y: val.govdom
                            }, {
                                name: 'Export',
                                y: val.export
                            }],
                            year: val.year
                        };
                        $scope.graphData.push(graphObj);
                        $scope.graphYears.push(val.year);
                    });
                    _.map(data.result.plugins.management, function (val) {
                        val.writeUp = $sce.trustAsHtml(val.writeUp);
                        val.writeUpDetail = $sce.trustAsHtml(val.writeUpDetail);
                    })
                    $scope.corporateInfoObj = data.result;
                    var managementPluginArr = _.chunk(data.result.plugins.management, 3);
                    $scope.management.mangementInfo1 = managementPluginArr[0];
                    $scope.management.mangementInfo2 = managementPluginArr[1];
                    console.log(" $scope $scope.managementInfo = {};", $scope.management);
                } else if (data.statusCode == 2) {
                    // alert("no date found");
                    $scope.corporateInfoObj = {};
                } else if (data.statusCode == 1) {
                    console.log(" getCorporateInfo error");
                    // alert("error");
                }
            });
        };

        $scope.getCorporateInfo();


        //Function to get product categories
        $scope.getFinancialYearList = function () {
            NavigationService.getFinancialYearList({}, function (data) {
                if (data.statusCode == 0) {
                    $scope.financialYear = data.result;
                    console.log("$scope.FinancialYear", $scope.FinancialYear);
                } else if (data.statusCode == 2) {
                    // alert("no date found");
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

        $scope.setInfo = function (info) {
            $scope.managementInfo = info;
        }

    });