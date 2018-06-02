'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('zimlabApp')
	.directive('notifications',function(){
		return {
        templateUrl:'directives/notifications/notifications.html',
        restrict: 'E',
        replace: true,
    	}
	});


