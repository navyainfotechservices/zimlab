
/**
 * @ngdoc function
 * @name zimlabApp.controller:CreateProductCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('CreateGraphCtrl', function ($scope, NavigationService, $state) {

        $scope.Graph = {};
        $scope.extensions = ["pdf", "jpg", "jpeg", "bmp", "png", "tiff"]; // file upload directive


        // Function to create Graph 
        $scope.saveGraph = function (value) {

            NavigationService.saveGraph(value, function (data) {
                if (data.statusCode == 0) {
                    $state.go('dashboard.GraphList');
                } else {
                    alert("unable to save Financial Year");
                }
            });
        };

        //To reset the page
        $scope.reset = function () {
            $scope.Graph = {};
        };

        //Function to return product category list page
        $scope.goBack = function () {
            $state.go('dashboard.GraphList');
        };
    });