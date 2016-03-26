'use strict';

describe('Service: LOGINURL', function () {

  // load the service's module
  beforeEach(module('alfehrestAngularApp'));

  // instantiate service
  var LOGINURL;
  beforeEach(inject(function (_LOGINURL_) {
    LOGINURL = _LOGINURL_;
  }));

  it('should do something', function () {
    expect(!!LOGINURL).toBe(true);
  });

});
