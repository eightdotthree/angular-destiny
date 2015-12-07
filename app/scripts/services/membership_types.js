'use strict';

/**
 * @ngdoc service
 * @name destinyApp.MEMBERSHIPTYPES
 * @description
 * # MEMBERSHIPTYPES
 * Constant in the destinyApp.
 */
angular.module('destinyApp')
  .constant('MEMBERSHIPTYPES', [
        {
            'name':     'psn',
            'id':       1
        },
        {
            'name':     'xbox',
            'id':       2
        }
    ]
);