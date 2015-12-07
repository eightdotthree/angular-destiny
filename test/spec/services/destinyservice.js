'use strict';

describe('Service: DestinyService', function () {

  // load the service's module
  beforeEach(module('destinyApp'));

  // instantiate service
  var DestinyService;
  beforeEach(inject(function (_DestinyService_) {
    DestinyService = _DestinyService_;
  }));

  it('should do something', function () {
    expect(!!DestinyService).toBe(true);
  });

});
