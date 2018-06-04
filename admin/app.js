'use strict';
/**
 * @ngdoc overview
 * @name zimlabApp
 * @description
 * # zimlabApp
 *
 * Main module of the application.
 */
angular
  .module('zimlabApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    // 'ui.router.modal',
    'angular-loading-bar',
    'toastr'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {


    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
    });

    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
          loadMyDirectives: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'zimlabApp',
                files: [
                  'js/sb-admin-2.js',
                  'directives/header/header.js',
                  'directives/header/header-notification/header-notification.js',
                  'directives/sidebar/sidebar.js',
                  'directives/sidebar/sidebar-search/sidebar-search.js'
                ]
              }),
              $ocLazyLoad.load({
                name: 'toggle-switch',
                files: ["../bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                  "../bower_components/angular-toggle-switch/angular-toggle-switch.css"
                ]
              }),
              $ocLazyLoad.load({
                name: 'ngAnimate',
                files: ['../bower_components/angular-animate/angular-animate.js']
              })
            $ocLazyLoad.load({
              name: 'ngCookies',
              files: ['../bower_components/angular-cookies/angular-cookies.js']
            })
            $ocLazyLoad.load({
              name: 'ngResource',
              files: ['../bower_components/angular-resource/angular-resource.js']
            })
            $ocLazyLoad.load({
              name: 'ngSanitize',
              files: ['../bower_components/angular-sanitize/angular-sanitize.js']
            })
            $ocLazyLoad.load({
              name: 'ngTouch',
              files: ['../bower_components/angular-touch/angular-touch.js']
            })
          }
        }
      })
      // .state('login', {
      //   url: '/login',
      //   controller: 'LoginCtrl',
      //   templateUrl: 'views/login.html',
      // })
      .state('dashboard.home', {
        url: '/home',
        controller: 'MainCtrl',
        templateUrl: 'views/dashboard/home.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/main.js',
                'directives/timeline/timeline.js',
                'directives/notifications/notifications.js',
                'directives/chat/chat.js',
                'directives/dashboard/stats/stats.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form', {
        templateUrl: 'views/form.html',
        url: '/form'
      })
      .state('dashboard.blank', {
        templateUrl: 'views/pages/blank.html',
        url: '/blank'
      })
      .state('login', {
        templateUrl: 'views/pages/login.html',
        url: '/login',
        controller: 'LoginCtrl'
      })
      .state('dashboard.chart', {
        templateUrl: 'views/chart.html',
        url: '/chart',
        controller: 'ChartCtrl',
        resolve: {
          loadMyFile: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'chart.js',
                files: [
                  '../bower_components/angular-chart.js/dist/angular-chart.min.js',
                  '../bower_components/angular-chart.js/dist/angular-chart.css'
                ]
              }),
              $ocLazyLoad.load({
                name: 'zimlabApp',
                files: ['controllers/chartContoller.js']
              })
          }
        }
      })
      .state('dashboard.table', {
        templateUrl: 'views/table.html',
        url: '/table'
      })
      .state('dashboard.leadership', {
        templateUrl: 'views/ui-elements/leadership.html',
        url: '/leadership'
      })
      .state('dashboard.management', {
        templateUrl: 'views/ui-elements/management.html',
        url: '/management'
      })
      .state('dashboard.graph', {
        templateUrl: 'views/ui-elements/graph.html',
        url: '/graph'
      })
      .state('dashboard.rolloverImage', {
        templateUrl: 'views/ui-elements/rolloverImage.html',
        url: '/rolloverImage'
      })

      .state('dashboard.carousel', {
        templateUrl: 'views/ui-elements/carousel.html',
        url: '/carousel'
      })

      .state('dashboard.banner', {
        templateUrl: 'views/ui-elements/banner.html',
        url: '/banner'
      })

      .state('dashboard.heroBanner', {
        templateUrl: 'views/ui-elements/heroBanner.html',
        url: '/heroBanner'
      })

      .state('dashboard.notifications', {
        templateUrl: 'views/ui-elements/notifications.html',
        url: '/notifications'
      })
      .state('dashboard.typography', {
        templateUrl: 'views/ui-elements/typography.html',
        url: '/typography'
      })
      .state('dashboard.icons', {
        templateUrl: 'views/ui-elements/icons.html',
        url: '/icons'
      })
      .state('dashboard.grid', {
        templateUrl: 'views/ui-elements/grid.html',
        url: '/grid'
      })


      // Zim lab navigation

      //Home Main horizontal sliders

      .state('dashboard.homeListSlider', {
        templateUrl: 'views/homeListSlider.html',
        url: '/homeListSlider',
        controller: 'HomeListSliderCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/HomeListSliderCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      .state('dashboard.createHomeSlider', {
        templateUrl: 'views/createEditHomeSlider.html',
        url: '/createHomeSlider',
        controller: 'CreateEditHomeSliderCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/CreateEditHomeSliderCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      .state('dashboard.editHomeSlider', {
        templateUrl: 'views/createEditHomeSlider.html',
        url: '/editHomeSlider/:id',
        controller: 'CreateEditHomeSliderCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/CreateEditHomeSliderCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      // Home sliders
      .state('dashboard.homeList', {
        templateUrl: 'views/homeList.html',
        url: '/homeList',
        controller: 'HomeListCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/HomeListCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })


      //Home sliders
      .state('dashboard.createHome', {
        templateUrl: 'views/createEditHome.html',
        url: '/createHome',
        controller: 'CreateEditHomeCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/CreateEditHomeCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      .state('dashboard.editHome', {
        templateUrl: 'views/createEditHome.html',
        url: '/editHome/:id',
        controller: 'CreateEditHomeCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/CreateEditHomeCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      // Product 
      .state('dashboard.productCategory', {
        templateUrl: 'views/productCategory.html',
        url: '/productCategory',
        controller: 'ProductCategoryCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/ProductCategoryCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      .state('dashboard.createProductCategory', {
        templateUrl: 'views/createProductCategory.html',
        url: '/createProductCategory',
        controller: 'CreateProductCategoryCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/CreateProductCategoryCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      .state('dashboard.editProductCategory', {
        templateUrl: 'views/editProductCategory.html',
        url: '/editProductCategory/:id',
        controller: 'EditProductCategoryCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/EditProductCategoryCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      .state('dashboard.productList', {
        templateUrl: 'views/productList.html',
        url: '/productList',
        controller: 'ProductListCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/ProductListCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      .state('dashboard.createProduct', {
        templateUrl: 'views/createProduct.html',
        url: '/createProduct',
        controller: 'CreateProductCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/CreateProductCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      .state('dashboard.editProduct', {
        templateUrl: 'views/editProduct.html',
        url: '/editProduct/:id',
        controller: 'EditProductCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/EditProductCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      //For banners images
      .state('dashboard.bannerList', {
        templateUrl: 'views/bannerList.html',
        url: '/bannerList',
        controller: 'BannerListCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/BannerListCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      .state('dashboard.createBanner', {
        templateUrl: 'views/createBanner.html',
        url: '/createBanner',
        controller: 'CreateBannerCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/CreateBannerCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      .state('dashboard.editBanner', {
        templateUrl: 'views/editBanner.html',
        url: '/editBanner/:id',
        controller: 'EditBannerCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/EditBannerCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      // CorporateInformation or FinancialYear
      .state('dashboard.financialYearList', {
        templateUrl: 'views/financialYearList.html',
        url: '/financialYearList',
        controller: 'FinancialYearListCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/FinancialYearListCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      .state('dashboard.createFinancialYear', {
        templateUrl: 'views/createFinancialYear.html',
        url: '/createFinancialYear',
        controller: 'CreateFinancialYearCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/CreateFinancialYearCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      .state('dashboard.editFinancialYear', {
        templateUrl: 'views/editFinancialYear.html',
        url: '/editFinancialYear/:id',
        controller: 'EditFinancialYearCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/EditFinancialYearCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      // Graph
      .state('dashboard.GraphList', {
        templateUrl: 'views/GraphList.html',
        url: '/GraphList',
        controller: 'GraphListCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/GraphListCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      .state('dashboard.createGraph', {
        templateUrl: 'views/createGraph.html',
        url: '/createGraph',
        controller: 'CreateGraphCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/CreateGraphCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })

      .state('dashboard.editGraph', {
        templateUrl: 'views/editGraph.html',
        url: '/editGraph/:id',
        controller: 'EditGraphCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/EditGraphCtrl.js',
                'factories/navigation.js'
              ]
            })
          }
        }
      })
  }]);