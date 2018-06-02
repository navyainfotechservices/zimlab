'use strict';
/**
 * @ngdoc function
 * @name zimlabApp.service:CrudService
 * @description
 * # CrudService
 * Service of the zimlabApp
 */
angular.module('zimlabApp').service('CrudService', function (NavigationService) {

  this.getAllProductDetail = function (reqObj, callback) {
    NavigationService.apiCall('Product', '', function (data) {
      callback(data);
    })
  }

});