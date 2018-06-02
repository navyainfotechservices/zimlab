'use strict';
/**
 * @ngdoc function
 * @name zimlabApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
  .controller('MainCtrl', function ($scope, NavigationService, $state, $modal) {
    $scope.text = "add it bro";

    $scope.pages = [];

    // $scope.getPagesList = function () {
    //   NavigationService.getPagesList({}, function (data) {
    //     if (data.statusCode == 0) {
    //       $scope.pages = data.result;
    //       console.log("$scope.pages", $scope.pages);
    //       $state.reload();
    //     } else {
    //       alert("unable to get pages , please try again");
    //     }
    //   });
    // }
    // $scope.getPagesList();

    $scope.addPages = function () {
      // $scope.pages.push({});
      $scope.items = ['item1', 'item2', 'item3'];
      var modalInstance = $modal.open({
        templateUrl: 'views/ui-elements/test.html',
        controller: 'MainCtrl',
        size: 'lg',
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

  });
