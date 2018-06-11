
/**
 * @ngdoc function
 * @name zimlabApp.controller:BlogListCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('BlogListCtrl', function ($scope, NavigationService, $state) {

        //Function to get Blog categories
        $scope.getBlogList = function () {
            NavigationService.apiCall('blog/getBlogList', {}, function (data) {
                if (data.statusCode == 0) {
                    $scope.Blogs = data.result;
                } else if (data.statusCode == 2) {
                    alert("no date found");
                } else if (data.statusCode == 1) {
                    alert("error");
                }
            });
        };

        //Firt api call to get Blog 
        $scope.getBlogList();

        //Function to redirect to create Blog page
        $scope.createBlog = function () {
            $state.go("dashboard.createBlog");
        };

        //Function to redirect to edit Blog  page
        $scope.editBlog = function (BlogId) {
            $state.go("dashboard.editBlog", { id: BlogId });
        };

        //Function  to delete th Blog 
        $scope.deleteBlog = function (BlogId) {
            NavigationService.apiCall('blog/deleteBlog', { id: BlogId }, function (data) {
                if (data.statusCode == 0) {
                    $scope.Blogs = data.result;
                    $state.reload();
                } else {
                    alert("unable to delete , please try again");
                }
            });
        }
    });