
/**
 * @ngdoc function
 * @name zimlabApp.controller:EditProductCategoryCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('EditProductCategoryCtrl', function ($scope, NavigationService, $state, $stateParams) {


        $scope.pageTitle = "Edit product Category";

        //Function to get one product category to edit
        $scope.getOneProductCategory = function () {
            var id = $stateParams.id;
            if (id) {
                NavigationService.getOneProductCategory({ id: id }, function (data) {
                    if (data.statusCode == 0) {
                        $scope.category = data.result;
                    } else {
                        alert("unable to edit category, please try again");
                        $state.go('dashboard.productCategory');
                    }
                });
            }
        };
        $scope.getOneProductCategory();

        $scope.addSubcategory = function () {
            if ($scope.subCategory != '' && $scope.subCategory != null && $scope.subCategory != undefined) {
                $scope.category.subCategory.push({ 'name': $scope.subCategory, 'done': false })
                $scope.subCategory = ''
            } else {
                alert("please enter subcategory");
            }
        }

        //To delete the sub category
        $scope.deleteSubcategory = function (index) {
            $scope.category.subCategory.splice(index, 1);
        };

        //Add nodes
        $scope.addNotes = function () {
            if ($scope.categoryNote != '' && $scope.categoryNote != null && $scope.categoryNote != undefined) {
                $scope.category.categoryNote.push({ 'note': $scope.categoryNote, 'done': false })
                $scope.categoryNote = ''
            } else {
                alert("please enter subcategory");
            }
        }

        //To delete the notes
        $scope.deleteNotes = function (index) {
            $scope.category.categoryNote.splice(index, 1);
        };

        // Function to create product category
        $scope.updateProductCategory = function (value) {
            NavigationService.updateProductCategory(value, function (data) {
                if (data.statusCode == 0) {
                    $state.go('dashboard.productCategory');
                } else {
                    alert("unable to save category");
                }
            });
        };

        //To reset the page
        $scope.reset = function () {
            $scope.category = {};
        };

        //Function to return product category list page
        $scope.goBack = function () {
            $state.go('dashboard.productCategory');
        }
    });