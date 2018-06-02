
/**
 * @ngdoc function
 * @name zimlabApp.controller:HomeListCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('HomeListCtrl', function ($scope, NavigationService, $state) {

        //Function to get product categories
        $scope.getHomeList = function () {
            NavigationService.apiCall('home/getHomeList',{}, function (data) {
                if (data.statusCode == 0) {
                    $scope.homeSliders = data.result;
                } else if (data.statusCode == 2) {
                    alert("no date found");
                } else if (data.statusCode == 1) {
                    alert("error");
                }
            });
        };

        //Firt api call to get product 
        $scope.getHomeList();

        //Function to redirect to create product page
        $scope.createHome = function () {
            $state.go("dashboard.createHome");
        };

        //Function to redirect to edit product  page
        $scope.editHome = function (homeId) {
            $state.go("dashboard.editHome", { id: homeId });
        };

        //Function  to delete th product 
        $scope.deleteHome = function (homeId) {
            NavigationService.apiCall('home/deleteHome',{ id: homeId }, function (data) {
                if (data.statusCode == 0) {
                    $scope.homeSliders = data.result;
                    $state.reload();
                } else {
                    alert("unable to delete , please try again");
                }
            });
        }
    });