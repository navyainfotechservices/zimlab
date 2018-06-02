'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('zimlabApp')
	.directive('timeline',function() {
    return {
        templateUrl:'directives/timeline/timeline.html',
        restrict: 'E',
        replace: true,
    }
});
