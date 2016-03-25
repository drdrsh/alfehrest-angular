'use strict';

describe('Service: Page', function() {

  // load the service's module
  beforeEach(module('alfehrestAngularApp'));

  // instantiate service
  var Page;
  beforeEach(inject(function(_Page_) {
    Page = _Page_;
  }));

  it('should set default title to `إدارة الفهرست`', function() {
    expect(Page._title).toBe('إدارة الفهرست');
  });

  it('should set page title to `إدارة الفهرست - تسجيل الدخول`', function() {
    Page.setTitle('تسجيل الدخول');

    expect(Page._title).toBe('إدارة الفهرست - تسجيل الدخول');
  });

  it('should get title', function() {
    expect(Page.getTitle()).toBe('إدارة الفهرست');
  });
});
