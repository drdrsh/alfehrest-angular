'use strict';

/**
 * @ngdoc service
 * @name alfehrestAngularApp.AuthInterceptor
 * @description
 * # AuthInterceptor
 * Factory in the alfehrestAngularApp.
 */
angular.module('alfehrestAngularApp')
  .factory('AuthInterceptor', function($q, $location, LOGINURL, toaster) {

    // Public API here
    return {
      responseError: function(rejection) {
        if (rejection.status === 401) {
          toaster.pop('error', 'Unauthorized Operation');
          if ($location.path() !== LOGINURL) $location.path(LOGINURL);
        }

        return $q.reject(rejection);
      }
    };
  });
