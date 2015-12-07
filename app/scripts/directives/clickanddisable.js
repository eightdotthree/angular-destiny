'use strict';

/**
 * @ngdoc directive
 * @name destinyApp.directive:ClickAndDisable
 * @description
 * # ClickAndDisable
 */
angular.module('destinyApp')
  .directive('clickAndDisable', function () {
    return {
      restrict: 'A',
      scope: {
        clickAndDisable: '&'
      },
      link: function postLink(scope, element, attrs) {

        element.bind('click', function() {

          element.addClass('is-loading');
          element.prop('disabled', true);

          scope.clickAndDisable()
            .then(
              function (response) {

                if (response.data.ErrorCode === 1) {
                  element.addClass('is-ok').addClass('btn-success').removeClass('is-loading');
                } else {
                  element.addClass('is-not-ok').addClass('btn-danger').removeClass('is-loading');
                }

              })
            .finally(function () {
              element.prop('disabled', false);
            });

        });

      }
    };
  });
