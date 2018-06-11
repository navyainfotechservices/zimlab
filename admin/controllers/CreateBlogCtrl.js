
/**
 * @ngdoc function
 * @name zimlabApp.controller:CreateBlogCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('CreateBlogCtrl', function ($scope, NavigationService, $state) {

        $scope.blog = {};
        $scope.blog.tags = [];
        $scope.extensions = ["pdf", "jpg", "jpeg", "bmp", "png", "tiff"]; // file upload directive 

        $scope.addTags = function () {
            if ($scope.tags != '' && $scope.tags != null && $scope.tags != undefined) {
                $scope.blog.tags.push({ 'name': $scope.tags, 'done': false })
                $scope.tags = ''
            } else {
                alert("please enter tags");
            }
        }

        //To delete the sub blog
        $scope.deleteTags = function (index) {
            $scope.blog.tags.splice(index, 1);
        };

        // Function to create product blog
        $scope.saveBlog = function (value) {
            NavigationService.apiCall('blog/saveBlog', value, function (data) {
                if (data.statusCode == 0) {
                    $state.go('dashboard.blogList');
                } else {
                    alert("unable to save blog");
                }
            });
        };

        //To reset the page
        $scope.reset = function () {
            $scope.blog = {};
        };

        //Function to return product blog list page
        $scope.goBack = function () {
            $state.go('dashboard.blogList');
        };
    });