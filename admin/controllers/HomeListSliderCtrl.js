
/**
 * @ngdoc function
 * @name zimlabApp.controller:HomeListSliderCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('HomeListSliderCtrl', function ($scope, NavigationService, $state) {

        //Function to get product categories
        $scope.getHomeList = function () {
            NavigationService.apiCall('homeSlider/getHomeSliderList',{}, function (data) {
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
        $scope.createHomeSlider = function () {
            $state.go("dashboard.createHomeSlider");
        };

        //Function to redirect to edit product  page
        $scope.editHomeSlider = function (homeId) {
            $state.go("dashboard.editHomeSlider", { id: homeId });
        };

        //Function  to delete th product 
        $scope.deleteHomeSlider = function (homeId) {
            NavigationService.apiCall('homeSlider/deleteHomeSlider',{ id: homeId }, function (data) {
                if (data.statusCode == 0) {
                    $scope.homeSliders = data.result;
                    $state.reload();
                } else {
                    alert("unable to delete , please try again");
                }
            });
        }
    });