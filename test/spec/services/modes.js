'use strict';

describe('Service: modes', function () {

  // load the service's module
  beforeEach(module('destinyApp'));

  // instantiate service
  var modes;
  beforeEach(inject(function (_modes_) {
    modes = _modes_;
  }));

  it('should do something', function () {
    expect(!!modes).toBe(true);
  });

});
