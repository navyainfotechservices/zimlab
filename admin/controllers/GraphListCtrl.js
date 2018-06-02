
/**
 * @ngdoc function
 * @name zimlabApp.controller:GraphListCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('GraphListCtrl', function ($scope, NavigationService, $state) {

        //Function to get product categories
        $scope.getGraphList = function () {
            NavigationService.getGraphList({}, function (data) {
                if (data.statusCode == 0) {
                    $scope.Graph = data.result;
                } else if (data.statusCode == 2) {
                    alert("no date found");
                } else if (data.statusCode == 1) {
                    alert("error");
                }
            });
        };

        //Firt api call to get product 
        $scope.getGraphList();

        //Function to redirect to create product page
        $scope.createGraph = function () {
            $state.go("dashboard.createGraph");
        };

        //Function to redirect to edit product  page
        $scope.editGraph = function (GraphId) {
            $state.go("dashboard.editGraph", { id: GraphId });
        };

        //Function  to delete th product 
        $scope.deleteGraph = function (GraphId) {
            NavigationService.deleteGraph({ id: GraphId }, function (data) {
                if (data.statusCode == 0) {
                    $scope.Graph = data.result;
                    $state.reload();
                } else {
                    alert("unable to delete , please try again");
                }
            });
        }
    });