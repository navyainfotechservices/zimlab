
/**
 * @ngdoc function
 * @name zimlabApp.controller:BannerListCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('BannerListCtrl', function ($scope, NavigationService, $state) {

        //Function to get banner categories
        $scope.getBannerList = function () {
            NavigationService.getBannerList({}, function (data) {
                if (data.statusCode == 0) {
                    $scope.banners = data.result;
                } else if (data.statusCode == 2) {
                    alert("no date found");
                } else if (data.statusCode == 1) {
                    alert("error");
                }
            });
        };

        //Firt api call to get banner 
        $scope.getBannerList();

        //Function to redirect to create banner page
        $scope.createBanner = function () {
            alert("hiiii");
            $state.go("dashboard.createBanner");
        };

        //Function to redirect to edit banner  page
        $scope.editBanner = function (bannerId) {
            $state.go("dashboard.editBanner", { id: bannerId });
        };

        //Function  to delete th banner 
        $scope.deleteBanner = function (bannerId) {
            NavigationService.deleteBanner({ id: bannerId }, function (data) {
                if (data.statusCode == 0) {
                    $scope.banners = data.result;
                    $state.reload();
                } else {
                    alert("unable to delete , please try again");
                }
            });
        }
    });