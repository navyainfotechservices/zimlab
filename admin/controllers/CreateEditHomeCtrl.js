/**
 * @ngdoc function
 * @name zimlabApp.controller:CreateEditHomeCtrl
 * @description
 * # MainCtrl
 * Controller of the zimlabApp
 */
angular.module('zimlabApp')
    .controller('CreateEditHomeCtrl', function ($scope, NavigationService, $state,$stateParams, $uibModal) {

        $scope.home = {}; //- Main home variable.
        $scope.slider = {}; //- Slider Images and description.
        $scope.flags = {};
        $scope.home.sliderEditIndex = 'empty';
        $scope.extensions = ["pdf", "jpg", "jpeg", "bmp", "png", "tiff"]; // file upload directive
        //Function to get home sliders.
        $scope.getOneHome = function () {
            var id = $stateParams.id;
            if (id) {
                NavigationService.apiCall('home/getOneHome', { id:id }, function (data) {
                    if (data.statusCode == 0) {
                        $scope.home = data.result;
                    } else if (data.statusCode == 2) {
                        // alert("no date found");
                        $scope.home = {};
                    } else if (data.statusCode == 1) {
                        alert("error");
                    }
                });
            } else {
                $scope.home = {};
            }
        };

        // Function to create product category
        $scope.saveHome = function (value) {
            var obj = value;
            console.log("value", value);
            console.log("obj", obj);
            var url = '';
            if($stateParams.id) {
                url = 'home/updateHome';                
            } else {
                url = 'home/saveHome';
            }
            NavigationService.apiCall(url, obj, function (data) {
                if (data.statusCode == 0) {
                    $state.go('dashboard.homeList');
                } else {
                    alert("unable to save home sliders");
                }
            });
        };

        //To reset the page
        $scope.reset = function () {
            $scope.home = {};
        };

        //Function to return product category list page
        $scope.goBack = function () {
            $state.go('dashboard.homeList');
        };

        //Slider create
        // $scope.createSlider = function () {
        // console.log("In createSlider",createSlider);
        // $scope.modalInstance = $uibModal.open({
        //   animation: true,
        //   templateUrl: 'views/home/addEditHomeSlider.html',
        //   scope: $scope,
        //   size: 'md'
        // }); 
        //   }

        $scope.addSlider = function (slider) {
            if (_.isEmpty($scope.home.sliderImages)) {
                $scope.home.sliderImages = [];
            }

            if ($scope.home.sliderEditIndex != "empty") {
                $scope.home.sliderImages[$scope.home.sliderEditIndex] = _.cloneDeep(slider);
                $scope.flags.createSlider = false;
                $scope.home.sliderEditIndex = "empty";
                $scope.slider = {};
            } else {
                $scope.home.sliderImages.push(slider);
                $scope.slider = {};
                $scope.flags.createSlider = false;
            }
        }

        $scope.editSlider = function (index) {
            debugger;
            $scope.slider = {};
            $scope.home.sliderEditIndex = index;
            $scope.slider = _.cloneDeep($scope.home.sliderImages[index]);
            $scope.flags.createSlider = true;
        }

        $scope.removeSlider = function (index) {
            $scope.home.sliderImages.pop(index);
            $scope.flags.createSlider = false;
        }


        //- All init function should be here
        $scope.getOneHome();        

    });