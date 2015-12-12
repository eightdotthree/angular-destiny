'use strict';

/**
 * @ngdoc service
 * @name destinyApp.DestinyService
 * @description
 * # DestinyService
 * Service in the destinyApp.
 */
angular.module('destinyApp')
  .service('DestinyService', function ($http, $q, APIKEY, PLATFORMURL) {

    var logPrefix = 'DestinyService: ';

    function get (endpoint, params) {

        var deferred = $q.defer();
        var url = PLATFORMURL + endpoint;

        var config = {
            headers: {
                'x-api-key': APIKEY
            },
            params: params
        };

        $http.get(url, config)
            .then(
                function successCallback(response) {
                    deferred.resolve(response);
                },
                function errorCallback(response) {
                    deferred.resolve(response);
                }
            );

        return deferred.promise;

    }

    function getMembershipType (membershipType) {

        var _membershipType = 'all';

        if (membershipType) {
            _membershipType = membershipType;
        }

        return _membershipType;
    }


    var service = {

        /**
         * @name accountSummary
         * @description /{membershipType}/Account/{destinyMembershipId}/Summary/
         * @returns {Promise}
         */
        accountSummary: function (membershipType, destinyMembershipId) {

            var _membershipType = getMembershipType(membershipType);
            var _promise = get(_membershipType + '/Account/' + destinyMembershipId + '/Summary/');

            return _promise;

        },

        /**
         * @name activityHistory
         * @description /Stats/ActivityHistory/{membershipType}/{destinyMembershipId}/{characterId}/
         * @returns {Promise}
         */
        activityHistory: function (membershipType, membershipId, characterId, params) {

            var params = {
                mode: 'Story',
                count: 5
            };

            var _membershipType = getMembershipType(membershipType);
            var _promise = get('Stats/ActivityHistory/' + _membershipType + '/' + membershipId + '/' + characterId + '/', params);

            return _promise;

        },

        /**
         * @name character
         * @description /{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/
         * @param  {String} membershipType A valid non-BungieNet membership type.
         * @param  {String} membershipId   The Destiny membershipId of the user to retrieve.
         * @param  {String} characterId    The id of the character to retrieve.
         * @return {Promise}               [description]
         */
        character: function (membershipType, membershipId, characterId) {

            var _membershipType = getMembershipType(membershipType);
            var _promise = get(_membershipType + '/Account/' + membershipId + '/Character/' + characterId + '/');

            return _promise;

        },

        /**
         * @name characterStats
         * @description /Stats/{membershipType}/{destinyMembershipId}/{characterId}/
         * @return {[type]} [description]
         */
        characterStats: function (membershipType, membershipId, characterId) {

            var _membershipType = getMembershipType(membershipType);
            var _promise = get('/Stats/' + _membershipType + '/' + membershipId + '/' + characterId + '/');

            return _promise;

        },

        statsDefinition: function () {

            var _promise = get('/Stats/Definition/');
            return _promise;

        },

        /**
         * @name searchDestinyPlayer
         * @description /SearchDestinyPlayer/{membershipType}/{displayName}/
         * @returns {Promise}
         */
        searchDestinyPlayer: function (destinyPlayer, membershipType) {

            var _membershipType = getMembershipType(membershipType);
            var _promise = get('SearchDestinyPlayer/' + _membershipType + '/' + destinyPlayer + '/');

            return _promise;

        }

    };

    return service;

  });