'use strict';
/**
 * @ngdoc function
 * @name zimlabApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
  .controller('MainCtrl', function ($scope, NavigationService, $state, $modal, $timeout) {
    $scope.text = "add it bro";

    $scope.pages = [];
    $scope.isTrue = true;
    $scope.pluginList = ["Management", "Leadership"];

    $scope.getPagesList = function () {
      NavigationService.getPagesList({}, function (data) {
        if (data.statusCode == 0) {
          $scope.pages = data.result;
          console.log("$scope.pages", $scope.pages);
        } else {
          console.log(" unable to get pages , please try again !")
          // alert("unable to get pages , please try again");
        }
      });
    }
    $scope.getPagesList();

    $scope.addPages = function () {
      // $scope.pages.push({});
      var modalInstance = $modal.open({
        templateUrl: 'views/modal/pageName.html',
        scope: $scope,
        size: 'lg'
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        // $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.savePage = function (page) {
      NavigationService.savePages(page, function (data) {
        if (data.statusCode == 0) {
          $scope.getPagesList();
          $state.reload();
          // console.log("$scope.pages", $scope.pages);
        } else {
          alert("unable to get pages , please try again");
        }
      });
    }

    $scope.resetPage = function () {
      $scope.page = {};
    };


    $scope.getPluginPage = function (page) {
      $scope.pageObj = page;
      // $jStorage.set("pageObj", $scope.pageObj);
      $scope.pluginModal = $modal.open({
        templateUrl: 'views/modal/pluginPage.html',
        scope: $scope,
        size: 'lg'
      });

      $scope.pluginModal.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        // $log.info('Modal dismissed at: ' + new Date());
      });
    };

    //Get Plugin for page
    $scope.getPlugin = function (plugin) {
      switch (plugin) {
        case "Management":
          $scope.storeMoreData = [];
          $scope.pluginName = "views/ui-elements/management.html";

          break;

        case "Leadership":
          $scope.storeMoreData = [];
          $scope.pluginName = "views/ui-elements/leadership.html";
          break;

        default: console.log("Invalid choice");
      }
    };


    $scope.addMore = function (value, plugin) {
      $scope.storeMoreData.push(value);
      switch (plugin) {
        case "Management":
          $scope.isTrue = false;
          $timeout(function () {
            $scope.management = {};
            $scope.isTrue = true;
          }, 100);

          break;

        case "Leadership":
          $scope.leadership = {};
          break;

        default: console.log("Invalid choice");
      }
    };

    $scope.saveData = function (value, key) {
      console.log("$scope.pageObj ", $scope.pageObj)
      $scope.storeMoreData.push(value);
      if ($scope.pageObj.plugins) {
        _.each($scope.storeMoreData, function (n) {
          $scope.pageObj.plugins[key].push(n)
        });
      } else {
        $scope.pageObj.plugins = {};
        $scope.pageObj.plugins[key] = $scope.storeMoreData;
      }
      console.log("$scope.pageObj ::::: ", $scope.pageObj)
      NavigationService.updatePages($scope.pageObj, function (data) {
        if (data.statusCode == 0) {
          $scope.pluginModal.dismiss();
          $state.reload();
        } else {
          alert("unable to get pages , please try again");
        }
      });

    }

  });
