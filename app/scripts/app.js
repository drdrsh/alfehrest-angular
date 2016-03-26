'use strict';

/**
 * @ngdoc overview
 * @name alfehrestAngularApp
 * @description
 * # alfehrestAngularApp
 *
 * Main module of the application.
 */
angular
  .module('alfehrestAngularApp', [
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'toaster',
    'LocalStorageModule'
  ])
  .config(function($httpProvider) {
    // Config http
    $httpProvider.interceptors.push('AuthInterceptor');
  })
  .config(function($routeProvider) {
    // Config routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, Page) {
    // Provide Page service to the views
    $rootScope.Page = Page;
  })
  .run(function(localStorageService, $location, LOGINURL) {
    // Check token
    if (!localStorageService.get('token')) $location.path(LOGINURL);
  })
  .run(function() {

  });
