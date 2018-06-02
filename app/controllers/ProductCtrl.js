'use strict';
/**
 * @ngdoc function
 * @name zimlabApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
  .controller('ProductCtrl', function ProductCtrl($scope, NavigationService) {


    //To get products
    $scope.getProductList = function () {
      NavigationService.getProductList({}, function (data) {
        if (data.statusCode == 0) {
          $scope.products = data.result;

          _.each($scope.category, function (n) {
            _.each($scope.products, function (m) {
              if (n.categoryName == m.productCategory.categoryName) {
                if (!_.isEmpty(n.subCategory)) {
                  _.each(n.subCategory, function (o) {

                    if (!_.isEmpty(o.products)) {
                      if (o.name == m.productSubCategory) {
                        o.products.push(m);
                      }
                    } else {
                      o.products = [];
                      if (o.name == m.productSubCategory) {
                        o.products.push(m);
                      }
                    }
                  })
                }
              }
            })
          })
          console.log("products", $scope.products);
          console.log("finalResult", $scope.category);
        } else if (data.statusCode == 2) {
          // alert("no date found");
        } else if (data.statusCode == 1) {
          // alert("error");
        }
      });
    };

    //Function to get product categories
    $scope.getProductCategory = function () {
      NavigationService.getProductCategory({}, function (data) {
        if (data.statusCode == 0) {
          $scope.category = data.result;
          $scope.getProductList();
          console.log($scope.category, "$scope.category");
        // } else if (data.statusCode == 2) {
          alert("no date found");
        // } else if (data.statusCode == 1) {
          alert("error");
        }
      });
    };

    //Firt api call to get product category
    $scope.getProductCategory();

  });