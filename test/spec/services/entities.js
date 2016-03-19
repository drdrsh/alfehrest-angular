'use strict';

describe('Service: Entities', function() {

  // load the service's module
  beforeEach(module('alfehrestAngularApp'));

  // instantiate service
  var Entities;
  beforeEach(inject(function(_Entities_) {
    Entities = _Entities_;
  }));

  it('should be an array', function() {
    expect(angular.isArray(Entities)).toBe(true);
  });

});
