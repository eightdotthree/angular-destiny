'use strict';

/**
 * @ngdoc directive
 * @name destinyApp.directive:showResponse
 * @description
 * # showResponse
 */
angular.module('destinyApp')
  .directive('showResponse', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        element.bind('click', function() {

          angular.element('#' + attrs.showResponseId).toggleClass('in');

        });

      }
    };
  });
