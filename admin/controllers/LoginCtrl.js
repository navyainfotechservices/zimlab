/**
 * @ngdoc function
 * @name zimlabApp.controller:LoginCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('LoginCtrl', function ($scope, NavigationService, $state) {

        $scope.user = {}; //- Main user variable.
        //Function to get home sliders.
        $scope.loginUser = function () {
            NavigationService.apiCall('user/loginUser', $scope.user, function (data) {
                if (data.statusCode == 0) {
                    // $.jStorage.deleteKey("loggedInUser");
                    // $.jStorage.set("userDetail", data.result);
                    $state.go('dashboard.home');
                } else if (data.statusCode == 2) {
                    alert(data.result.message);
                } else if (data.statusCode == 1) {
                    alert("error");
                }
            });
        };
    });