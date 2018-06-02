
/**
 * @ngdoc function
 * @name zimlabApp.controller:EditBannerCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('EditBannerCtrl', function ($scope, NavigationService, $stateParams, $state) {

        $scope.banner = {};

        //Function to get one banner category to edit
        $scope.getOneBanner = function () {
            var id = $stateParams.id;
            if (id) {
                NavigationService.getOneBanner({ id: id }, function (data) {
                    if (data.statusCode == 0) {
                        $scope.banner = data.result;
                    }
                });
            }
        };
        $scope.getOneBanner();

        // Function to create banner category
        $scope.updateBanner = function (value) {
            var obj = value;
            NavigationService.updateBanner(obj, function (data) {
                if (data.statusCode == 0) {
                    $state.go('dashboard.bannerList');
                } else {
                    alert("unable to save banner");
                }
            });
        };

        //Function to return banner category list page
        $scope.goBack = function () {
            $state.go('dashboard.bannerList');
        };
    });