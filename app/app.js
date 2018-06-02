'use strict';
/**
 * @ngdoc overview
 * @name zimlabApp
 * @description
 * # zimlabApp
 *
 * Main module of the application.
 */

var adminurl = "http://nits.io/api/";

angular
  .module('zimlabApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
    });

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      //   .state('app', {
      //     url:'/app',
      //     templateUrl: 'views/dashboard/main.html',
      //     resolve: {
      //         loadMyDirectives:function($ocLazyLoad){
      //             return $ocLazyLoad.load(
      //             {
      //                 name:'zimlabApp',
      //                 files:[
      //                 'directives/header/header.js',
      //                 'directives/header/header-notification/header-notification.js',
      //                 'directives/sidebar/sidebar.js',
      //                 'directives/sidebar/sidebar-search/sidebar-search.js'
      //                 ]
      //             }),
      //             // $ocLazyLoad.load(
      //             // {
      //             //    name:'toggle-switch',
      //             //    files:["../bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
      //             //           "../bower_components/angular-toggle-switch/angular-toggle-switch.css"
      //             //       ]
      //             // }),
      //             // $ocLazyLoad.load(
      //             // {
      //             //   name:'ngAnimate',
      //             //   files:['../bower_components/angular-animate/angular-animate.js']
      //             // })
      //             // $ocLazyLoad.load(
      //             // {
      //             //   name:'ngCookies',
      //             //   files:['../bower_components/angular-cookies/angular-cookies.js']
      //             // })
      //             // $ocLazyLoad.load(
      //             // {
      //             //   name:'ngResource',
      //             //   files:['../bower_components/angular-resource/angular-resource.js']
      //             // })
      //             // $ocLazyLoad.load(
      //             // {
      //             //   name:'ngSanitize',
      //             //   files:['../bower_components/angular-sanitize/angular-sanitize.js']
      //             // })
      //             // $ocLazyLoad.load(
      //             // {
      //             //   name:'ngTouch',
      //             //   files:['../bower_components/angular-touch/angular-touch.js']
      //             // })
      //         }
      //     }
      // })
      .state('home', {
        url: '/home',
        controller: 'HomeCtrl',
        templateUrl: 'views/index.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/HomeCtrl.js',
                'factories/NavigationService.js',
                'services/CrudService.js',
                'services/HomeService.js'
              ]
            })
          }
        }
      })

      .state('product', {
        url: '/product',
        controller: 'ProductCtrl',
        templateUrl: 'views/products.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/ProductCtrl.js',
                'factories/NavigationService.js',
                'services/CrudService.js',
                'services/ProductService.js'
              ]
            })
          }
        }
      })

      .state('corporate-information', {
        url: '/corporate-information',
        controller: 'CorporateInformationCtrl',
        templateUrl: 'views/corporate-information.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'zimlabApp',
              files: [
                'controllers/CorporateInformationCtrl.js',
                'factories/NavigationService.js',
                'services/CrudService.js',
              ]
            })
          }
        }
      })

  }]);