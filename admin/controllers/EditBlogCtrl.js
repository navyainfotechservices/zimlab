
/**
 * @ngdoc function
 * @name zimlabApp.controller:EditBlogCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('EditBlogCtrl', function ($scope, NavigationService, $state, $stateParams) {


        $scope.pageTitle = "Edit product Category";

        //Function to get one product category to edit
        $scope.getOneBlog = function () {
            var id = $stateParams.id;
            if (id) {
                NavigationService.apiCall('blog/getOneBlog', { id: id }, function (data) {
                    if (data.statusCode == 0) {
                        $scope.blog = data.result;
                    } else {
                        alert("unable to edit category, please try again");
                        $state.go('dashboard.blogList');
                    }
                });
            }
        };
        $scope.getOneBlog();

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

        // Function to create product category
        $scope.updateBlog = function (value) {
            NavigationService.apiCall('blog/updateBlog', value, function (data) {
                if (data.statusCode == 0) {
                    $state.go('dashboard.blogList');
                } else {
                    alert("unable to save Blog");
                }
            });
        };

        //To reset the page
        $scope.reset = function () {
            $scope.blog = {};
        };

        //Function to return product category list page
        $scope.goBack = function () {
            $state.go('dashboard.blogList');
        }
    });