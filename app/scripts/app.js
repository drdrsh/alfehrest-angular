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
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, Page) {
    // Provide Page service to the views
    $rootScope.Page = Page;
  })
  .run(function() {

  });
