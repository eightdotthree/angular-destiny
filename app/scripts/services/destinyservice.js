'use strict';

/**
 * @ngdoc service
 * @name destinyApp.DestinyService
 * @description
 * # DestinyService
 * Service in the destinyApp.
 */
angular.module('destinyApp')
  .service('DestinyService', function ($http, $q, APIKEY, PLATFORM_URL) {

    var logPrefix = 'DestinyService: ';

    function get (endpoint, params) {

        var defer = $q.defer();
        var url = PLATFORM_URL + endpoint;

        var config = {
            headers: {
                'x-api-key': APIKEY
            },
            params: params
        };

        $http.get(url, config)
            .success(function (data, status) {
                defer.resolve(data);
            })
            .error(function (data, status) {
                defer.reject('HTTP Error: ' + status);
            });

        return defer.promise;

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
            var promise = get(_membershipType + '/Account/' + destinyMembershipId + '/Summary/');
            return promise;

        },

        /**
         * @name characterActivityHistory
         * @description /Stats/ActivityHistory/{membershipType}/{destinyMembershipId}/{characterId}/
         * @returns {Promise}
         */
        characterActivityHistory: function (membershipType, membershipId, characterId) {

            var params = {
                mode: 'Story',
                count: 5
            };

            var _membershipType = getMembershipType(membershipType);
            var _promise = get('Stats/ActivityHistory/' + _membershipType + '/' + membershipId + '/' + characterId + '/', params);

            return _promise;

        },

        /**
         * @name characterSummary
         * @description /{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/
         * @param  {String} membershipType A valid non-BungieNet membership type.
         * @param  {String} membershipId   The Destiny membershipId of the user to retrieve.
         * @param  {String} characterId    The id of the character to retrieve.
         * @return {Promise}               [description]
         */
        characterSummary: function (membershipType, membershipId, characterId) {

            var promise = get(getMembershipType(membershipType) + '/Account/' + membershipId + '/Character/' + characterId + '/');

            return promise.then(function success(response) {
                // this is will you will process and add to a Character service
                console.log(response);
                response.test = 'Ryan Test!!!';
                return response;
            });

        },

        /**
         * @name characterStats
         * @description /Stats/{membershipType}/{destinyMembershipId}/{characterId}/
         * @returns {Promise}
         */
        characterStats: function (membershipType, membershipId, characterId) {

            var _membershipType = getMembershipType(membershipType);
            var _promise = get('/Stats/' + _membershipType + '/' + membershipId + '/' + characterId + '/');

            return _promise;

        },

        /**
         * [statsDefinition description]
         * @returns {Promise}
         */
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

        },

        /**
         * @name getMembershipIdByDisplayName
         * @description
         *     /{membershipType}/Stats/GetMembershipIdByDisplayName/{displayName}/
         *     https://www.bungie.net/platform/destiny/help/HelpDetail/GET?uri=%7bmembershipType%7d%2fStats%2fGetMembershipIdByDisplayName%2f%7bdisplayName%7d%2f
         * @returns {Promise}
         */
        getMembershipIdByDisplayName: function (membershipType, displayName) {
            var promise = get(membershipType + '/Stats/GetMembershipIdByDisplayName/' + displayName + '/');
            return promise;
        }

    };

    return service;

  });