
/**
 * @ngdoc function
 * @name zimlabApp.controller:EditProductCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('EditProductCtrl', function ($scope, NavigationService, $stateParams, $state) {

        $scope.product = {};
        $scope.subCategory = [];

        //Function to get one product category to edit
        $scope.getOneProduct = function () {
            var id = $stateParams.id;
            if (id) {
                NavigationService.getOneProduct({ id: id }, function (data) {
                    if (data.statusCode == 0) {
                        $scope.product = data.result;
                    } else {
                        alert("unable to edit category, please try again");
                        $state.go('dashboard.productCategory');
                    }
                });
            }
        };
        $scope.getOneProduct();

        //Function to get product categories for product
        $scope.getProductCategory = function () {
            NavigationService.getProductCategory({}, function (data) {
                if (data.statusCode == 0) {
                    $scope.category = data.result;
                } else if (data.statusCode == 2) {
                    alert("no date found");
                } else if (data.statusCode == 1) {
                    alert("error");
                }
            });
        };

        //Firt api call to get product category
        $scope.getProductCategory();

        //get sub category for product
        $scope.getSubCategory = function (val) {
            console.log($scope.category, "categoryId", val);
            for (i = 0; i < $scope.category.length; i++) {
                if ($scope.category[i]._id == val)
                    $scope.subCategory = $scope.category[i].subCategory;
            }
            console.log($scope.subCategory);
        };

        $scope.addSubcategory = function () {
            if ($scope.subCategory != '' && $scope.subCategory != null && $scope.subCategory != undefined) {
                $scope.category.subCategory.push({ 'name': $scope.subCategory, 'done': false })
                $scope.subCategory = ''
            } else {
                alert("please enter subcategory");
            }
        }

        //To delete the sub category
        // $scope.deleteSubcategory = function (index) {
        //     $scope.category.subCategory.splice(index, 1);
        // };

        // Function to create product category
        $scope.updateProduct = function (value) {
            var obj = value;
            console.log("value", value);
            obj.productSubCategory = obj.productSubCategory.name;
            console.log("obj", obj);
            NavigationService.updateProduct(obj, function (data) {
                if (data.statusCode == 0) {
                    $state.go('dashboard.productList');
                } else {
                    alert("unable to save product");
                }
            });
        };

        //To reset the page
        $scope.reset = function () {
            $scope.category = {};
        };

        //Function to return product category list page
        $scope.goBack = function () {
            $state.go('dashboard.productList');
        };
    });