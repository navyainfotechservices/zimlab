
/**
 * @ngdoc function
 * @name zimlabApp.controller:CreateBannerCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('CreateBannerCtrl', function ($scope, NavigationService, $state) {

        $scope.banner = {};
        $scope.subCategory = [];
        $scope.extensions = ["pdf", "jpg", "jpeg", "bmp", "png", "tiff"]; // file upload directive

        // Function to create banner category
        $scope.saveBanner = function (value) {
            var obj = value;
            NavigationService.saveBanner(obj, function (data) {
                if (data.statusCode == 0) {
                    $state.go('dashboard.bannerList');
                } else {
                    alert("unable to save banner");
                }
            });
        };

        //To reset the page
        $scope.reset = function () {
            $scope.category = {};
        };

        //Function to return banner category list page
        $scope.goBack = function () {
            $state.go('dashboard.bannerList');
        };
    });