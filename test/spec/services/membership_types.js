'use strict';

describe('Service: MEMBERSHIPTYPES', function () {

  // load the service's module
  beforeEach(module('destinyApp'));

  // instantiate service
  var MEMBERSHIPTYPES;
  beforeEach(inject(function (_MEMBERSHIPTYPES_) {
    MEMBERSHIPTYPES = _MEMBERSHIPTYPES_;
  }));

  it('should do something', function () {
    expect(!!MEMBERSHIPTYPES).toBe(true);
  });

});
