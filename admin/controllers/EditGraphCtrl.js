
/**
 * @ngdoc function
 * @name zimlabApp.controller:EditGraphCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('EditGraphCtrl', function ($scope, NavigationService, $state, $stateParams) {

        $scope.Graph = {};
        $scope.extensions = ["pdf", "jpg", "jpeg", "bmp", "png", "tiff"]; // file upload directive


        //Function to get one Graph  to edit
        $scope.getOneGraph = function () {
            var id = $stateParams.id;
            if (id) {
                NavigationService.getOneGraph({ id: id }, function (data) {
                    if (data.statusCode == 0) {
                        $scope.Graph = data.result;
                    } else {
                        $state.go('dashboard.GraphList');
                    }
                });
            }
        };
        $scope.getOneGraph();

        // Function to create product category
        $scope.updateGraph = function (value) {

            NavigationService.updateGraph(value, function (data) {
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

        //Function to return GraphList page
        $scope.goBack = function () {
            $state.go('dashboard.GraphList');
        };
    });