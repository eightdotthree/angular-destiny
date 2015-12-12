'use strict';

/**
 * @ngdoc directive
 * @name destinyApp.directive:apiTestBtn
 * @description
 * # apiTestBtn
 */
angular.module('destinyApp')
  .directive('apiTestBtn', function (CONFIG) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: CONFIG.directiveTemplateBaseUrl + 'apitestbtn.html',
      transclude: true,
      scope: {
        method: '=',
        params: '='
      },
      link: function postLink(scope, element, attrs) {

        /**
         * The then callback from the service promise.
         * @param  {Object} response
         */
        function _then (response) {
          if (response.data.ErrorCode === 1) {
            element.addClass('is-ok').addClass('btn-success').removeClass('is-loading');
          } else {
            element.addClass('is-not-ok').addClass('btn-danger').removeClass('is-loading');
          }
        }

        /**
         * The finally callback from the service promise.
         */
        function _finally () {
          element.prop('disabled', false);
        }

        /**
         * Let the button do its button thing. Calls the supplied method with the supplied params.
         */
        element.bind('click', function() {

          element.addClass('is-loading').removeClass('is-not-ok').removeClass('btn-danger');
          element.prop('disabled', true);

          scope.method(scope.params).then(_then).finally(_finally);

        });

      }
    };
  });
