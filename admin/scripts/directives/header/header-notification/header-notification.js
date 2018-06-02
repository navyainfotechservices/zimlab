'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('zimlabApp')
	.directive('headerNotification',function(){
		return {
        templateUrl:'directives/header/header-notification/header-notification.html',
        restrict: 'E',
        replace: true,
    	}
	});


