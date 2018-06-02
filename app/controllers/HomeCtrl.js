'use strict';
/**
 * @ngdoc function
 * @name zimlabApp.controller:HomeCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
	.controller('HomeCtrl',HomeCtrl);

	function HomeCtrl($scope, $sce, $timeout,HomeService,NavigationService) {
    $scope.line = {
	    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	    series: ['Series A', 'Series B'],
	    data: [
	      [65, 59, 80, 81, 56, 55, 40],
	      [28, 48, 40, 19, 86, 27, 90]
	    ],
	    onClick: function (points, evt) {
	      console.log(points, evt);
	    }
    };

    $scope.bar = {
	    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
		series: ['Series A', 'Series B'],

		data: [
		   [65, 59, 80, 81, 56, 55, 40],
		   [28, 48, 40, 19, 86, 27, 90]
		]
    	
    };

    $scope.donut = {
    	labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    	data: [300, 500, 100]
    };

    $scope.radar = {
    	labels:["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],

    	data:[
    	    [65, 59, 90, 81, 56, 55, 40],
    	    [28, 48, 40, 19, 96, 27, 100]
    	]
    };

    $scope.pie = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    	data : [300, 500, 100]
    };

    $scope.polar = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
    	data : [300, 500, 100, 40, 120]
    };

    $scope.dynamic = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
    	data : [300, 500, 100, 40, 120],
    	type : 'PolarArea',

    	toggle : function () 
    	{
    		this.type = this.type === 'PolarArea' ?
    	    'Pie' : 'PolarArea';
		}
		};


	 //Function to get Sliders sub sliders
	 $scope.sliders = [];
	 $scope.getSliders = function () {
		NavigationService.apiCall("home/getHomeList",{}, function (data) {
		  if (data.statusCode == 0) {
			  _.map(data.result,function(val) {
				  val.description = $sce.trustAsHtml(val.description);
			  })
			$scope.sliders = data.result;
			console.log($scope.sliders, "$scope.sliders");
		  } else if (data.statusCode == 2) {
			// alert("no date found");
		  } else if (data.statusCode == 1) {
			// alert("error");
		  }
		});
	  };	


	  // Initalize function here
	  $scope.getSliders();
		
};