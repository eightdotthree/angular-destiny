'use strict';

/**
 * @ngdoc service
 * @name destinyApp.MEMBERSHIPTYPES
 * @description
 * # MEMBERSHIPTYPES
 * Constant in the destinyApp.
 */
angular.module('destinyApp')
  .constant('MEMBERSHIP_TYPES', [
        {
            'name':         'psn',
            'displayName':  'PSN',
            'id':           1
        },
        {
            'name':         'xbox',
            'displayName':  'Xbox Live',
            'id':           2
        }
    ]
);