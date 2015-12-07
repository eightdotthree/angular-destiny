'use strict';

describe('Directive: TestDirective', function () {

  // load the directive's module
  beforeEach(module('destinyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-test-directive></-test-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the TestDirective directive');
  }));
});
