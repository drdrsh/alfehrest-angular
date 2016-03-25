'use strict';

/**
 * @ngdoc service
 * @name alfehrestAngularApp.Page
 * @description
 * # Page
 * Service in the alfehrestAngularApp.
 */
angular.module('alfehrestAngularApp')
  .service('Page', function() {
    var defaultTitle = 'إدارة الفهرست';

    this._title = defaultTitle;

    this.getTitle = function() {
      return this._title;
    };

    this.setTitle = function(pageTitle) {
      this._title = defaultTitle + ' - ' + pageTitle;
    };
  });
