'use strict';

/**
 * @ngdoc directive
 * @name destinyApp.directive:TestDirective
 * @description
 * # TestDirective
 */
angular.module('destinyApp')
  .directive('TestDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the TestDirective directive');
      }
    };
  });
