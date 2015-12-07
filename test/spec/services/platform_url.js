'use strict';

describe('Service: PLATFORMURL', function () {

  // load the service's module
  beforeEach(module('destinyApp'));

  // instantiate service
  var PLATFORMURL;
  beforeEach(inject(function (_PLATFORMURL_) {
    PLATFORMURL = _PLATFORMURL_;
  }));

  it('should do something', function () {
    expect(!!PLATFORMURL).toBe(true);
  });

});
