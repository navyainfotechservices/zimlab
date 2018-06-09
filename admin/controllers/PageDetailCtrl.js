/**
 * @ngdoc function
 * @name zimlabApp.controller:PageDetailCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('PageDetailCtrl', function ($scope, NavigationService, $state, $stateParams, $modal, $timeout) {

        $scope.pageObj = {};
        $scope.id = "";

        $scope.text = "add it bro";

        $scope.pages = [];
        $scope.isTrue = true;
        $scope.pluginList = ["Management", "Leadership", "Banner", "Graph", "Rollover Image", "Carousel"];

        //Function to get product categories
        $scope.getOnePage = function () {
            $scope.id = $stateParams.id;
            if ($scope.id) {
                NavigationService.apiCall('pages/getOnePages', {
                    id: $scope.id
                }, function (data) {
                    if (data.statusCode == 0) {
                        $scope.pageObj = data.result;
                    } else if (data.statusCode == 2) {
                        // alert("no date found");
                        $scope.pageObj = {};
                    } else if (data.statusCode == 1) {
                        alert("error");
                    }
                });
            } else {
                $scope.pageObj = {};
            }
        };

        //Firt api call to get page 
        $scope.getOnePage();

        //Function to redirect to create product page
        // $scope.createPage = function () {
        //     $state.go("dashboard.createPage");
        // };


        /*************************************** Edit Section Starts **************************************************/

        $scope.editPage = function (val) {
            for (var key in $scope.pageObj.plugins) {
                if (val == key) {
                    $scope.pluginContent = $scope.pageObj.plugins[key];
                    $scope.key = key;
                }
            }
            $scope.pluginHeader = val;
            console.log("$scope.pluginContent", $scope.pluginContent);

            $scope.pluginModal = $modal.open({
                templateUrl: 'views/modal/pluginContent.html',
                scope: $scope,
                size: 'lg'
            });

            $scope.pluginModal.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                // $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.getPluginContent = function (val1, val2) {
            $scope.pluginModal.dismiss();
            $scope.isTrue = true;
            $scope.pluginContentIndex = val2;
            switch ($scope.pluginHeader) {
                case "management":
                    $scope.storeMoreData = [];
                    $scope.addMoreDataArray = [];
                    $scope.management = val1;
                    $scope.pluginName = "views/ui-elements/managementEdit.html";

                    break;

                case "leadership":
                    $scope.storeMoreData = [];
                    $scope.leadership = val1;
                    $scope.pluginName = "views/ui-elements/leadership.html";
                    break;

                case "banner":
                    $scope.storeMoreData = [];
                    $scope.banner = val1;
                    $scope.pluginName = "views/ui-elements/banner.html";
                    break;

                case "graph":
                    $scope.storeMoreData = [];
                    $scope.graph = val1;
                    $scope.addMoreDataArray = [];
                    $scope.pluginName = "views/ui-elements/graph.html";
                    break;

                case "rolloverImage":
                    $scope.storeMoreData = [];
                    $scope.rolloverImage = val1;
                    $scope.pluginName = "views/ui-elements/rolloverImage.html";
                    break;

                case "carousel":
                    $scope.storeMoreData = [];
                    $scope.addMoreDataArray = [];
                    $scope.carousel = val1;
                    $scope.pluginName = "views/ui-elements/carousel.html";
                    break;

                default:
                    console.log("Invalid choice");
            }


            $scope.pluginModal = $modal.open({
                templateUrl: 'views/modal/pluginPageEdit.html',
                scope: $scope,
                size: 'lg'
            });

            $scope.pluginModal.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                // $log.info('Modal dismissed at: ' + new Date());
            });
        };


        $scope.addMoreUpdate = function (obj, key) {
            $scope.addMoreDataArray.push(obj);
            switch (key) {
                case "Management":
                    $scope.isTrue = false;
                    $timeout(function () {
                        $scope.management = {};
                        $scope.isTrue = true;
                    }, 100);

                    break;

                case "graph":
                    $scope.isTrue = false;
                    $timeout(function () {
                        $scope.graph = {};
                        $scope.isTrue = true;
                    }, 100);
                    break;

                case "carousel":
                    $scope.isTrue = false;
                    $timeout(function () {
                        $scope.carousel = {};
                        $scope.isTrue = true;
                    }, 100);
                    break;

                default:
                    console.log("Invalid choice");
            }
        }

        //Function  to delete th plugin 
        $scope.deletePluginContent = function (index) {
            $scope.pageObj.plugins[$scope.key].splice(index, 1);
            // $scope.pageObj.plugins = _.omit($scope.pageObj.plugins, [key]);
            // - Update page pass true for without dismiss modal 
            $scope.updatePage(true);
        }


        $scope.updateData = function (obj, key) {
            for (i = 0; i < $scope.pluginContent.length; i++) {
                if (i == $scope.pluginContentIndex) {
                    $scope.pluginContent[i] = obj;
                }
            }

            for (var key in $scope.pageObj.plugins) {
                if ($scope.pluginHeader == key) {
                    $scope.pageObj.plugins[key] = $scope.pluginContent;
                }
            }
            if ($scope.addMoreDataArray.length > 0) {
                console.log("$scope.addMoreDataArray.length", $scope.addMoreDataArray.length);
                _.each($scope.addMoreDataArray, function (n) {
                    $scope.pageObj.plugins[key].push(n)
                });
            }
            $scope.updatePage(true);
        }

        /*************************************** Edit Section Ends **************************************************/

        //Function  to delete th plugin 
        $scope.deletePage = function (key) {
            $scope.pageObj.plugins = _.omit($scope.pageObj.plugins, [key]);
            // - Update page pass true for without dismiss modal 
            $scope.updatePage();
        }

        $scope.addPlugin = function () {
            // $jStorage.set("pageObj", $scope.pageObj);
            $scope.pluginModal = $modal.open({
                templateUrl: 'views/modal/pluginPage.html',
                scope: $scope,
                size: 'lg'
            });

            $scope.pluginModal.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                // $log.info('Modal dismissed at: ' + new Date());
            });
        };

        //Get Plugin for page
        $scope.getPlugin = function (plugin) {
            switch (plugin) {
                case "Management":
                    $scope.storeMoreData = [];
                    $scope.management = {};
                    $scope.pluginName = "views/ui-elements/management.html";

                    break;

                case "Leadership":
                    $scope.storeMoreData = [];
                    $scope.leadership = {};
                    $scope.pluginName = "views/ui-elements/leadership.html";
                    break;

                case "Banner":
                    $scope.storeMoreData = [];
                    $scope.banner = {};
                    $scope.pluginName = "views/ui-elements/banner.html";
                    break;

                case "Graph":
                    $scope.storeMoreData = [];
                    $scope.graph = {};
                    $scope.pluginName = "views/ui-elements/graph.html";
                    break;

                case "Rollover Image":
                    $scope.storeMoreData = [];
                    $scope.rolloverImage = {};
                    $scope.pluginName = "views/ui-elements/rolloverImage.html";
                    break;

                case "Carousel":
                    $scope.storeMoreData = [];
                    $scope.carousel = {};
                    $scope.pluginName = "views/ui-elements/carousel.html";
                    break;

                default:
                    console.log("Invalid choice");
            }
        };


        $scope.addMore = function (value, plugin) {
            $scope.storeMoreData.push(value);
            switch (plugin) {
                case "Management":
                    $scope.isTrue = false;
                    $timeout(function () {
                        $scope.management = {};
                        $scope.isTrue = true;
                    }, 100);

                    break;

                case "Leadership":
                    $scope.leadership = {};
                    break;


                case "graph":
                    $scope.isTrue = false;
                    $timeout(function () {
                        $scope.graph = {};
                        $scope.isTrue = true;
                    }, 100);
                    break;

                case "carousel":
                    $scope.isTrue = false;
                    $timeout(function () {
                        $scope.carousel = {};
                        $scope.isTrue = true;
                    }, 100);
                    break;

                default:
                    console.log("Invalid choice");
            }
        };

        // $scope.addSubData = function (value, plugin) {
        //   $scope.storeMoreData.push(value);
        //   switch (plugin) {
        //     case "graph":
        //       $scope.isTrue = false;
        //       $timeout(function () {
        //         $scope.management = {};
        //         $scope.isTrue = true;
        //       }, 100);

        //       break;

        //     case "Leadership":
        //       $scope.leadership = {};
        //       break;

        //     default: console.log("Invalid choice");
        //   }
        // };

        $scope.updatePage = function (dismissFlag) {
            console.log("$scope.pageObj ::::: ", $scope.pageObj)
            NavigationService.updatePages($scope.pageObj, function (data) {
                if (data.statusCode == 0) {
                    if (dismissFlag) {
                        $scope.pluginModal.dismiss();
                    }
                    $state.reload();
                } else {
                    alert("unable to get pages , please try again");
                }
            });
        }

        $scope.saveData = function (value, key) {
            console.log("$scope.pageObj ", $scope.pageObj)
            $scope.storeMoreData.push(value);
            if ($scope.pageObj.plugins) {
                if ($scope.pageObj.plugins[key]) {
                    _.each($scope.storeMoreData, function (n) {
                        $scope.pageObj.plugins[key].push(n)
                    });
                } else {
                    $scope.pageObj.plugins[key] = $scope.storeMoreData;
                }

            } else {
                $scope.pageObj.plugins = {};
                $scope.pageObj.plugins[key] = $scope.storeMoreData;
            }
            // - Update page pass true for with dismiss modal 
            $scope.updatePage(true);

        }
    });