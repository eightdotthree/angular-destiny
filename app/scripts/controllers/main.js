'use strict';

/**
 * @ngdoc function
 * @name destinyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the destinyApp
 */
angular.module('destinyApp')
  .controller('MainCtrl', function (DestinyService) {

    var vm = this;
    var logPrefix = 'MainCtrl: ';
    var svc = DestinyService;

    console.log(logPrefix + 'initialized');

    vm.accountSummary = function (membershipType, membershipId) {

        console.group(logPrefix + 'accountSummary');
        console.info('membershipType: ' + membershipType);
        console.info('membershipId: ' + membershipId);
        console.groupEnd();

        var accountSummary = svc.accountSummary(membershipType, membershipId);
        accountSummary.then(function successCallback (response) {

            console.group(logPrefix + 'accountSummary successCallback');
            console.log(response);
            vm.accountSummaryResponse = angular.toJson(response, true);
            console.groupEnd();

        });

        return accountSummary;

    };

    vm.activityHistory = function (membershipType, membershipId, characterId) {

        console.group(logPrefix + 'activityHistory');
        console.info('membershipType: ' + membershipType);
        console.info('membershipId: ' + membershipId);
        console.info('characterId: ' + characterId);
        console.groupEnd();

        var activityHistory = svc.activityHistory(membershipType, membershipId, characterId);
        activityHistory.then(function successCallback (response) {

            console.group(logPrefix + 'activityHistory successCallback');
            console.log(response);
            vm.activityHistoryResponse = angular.toJson(response, true);
            console.groupEnd();

        });

        return activityHistory;

    };

    vm.character = function (membershipType, membershipId, characterId) {

        console.group(logPrefix + 'accountSummary');
        console.info('membershipType: ' + membershipType);
        console.info('membershipId: ' + membershipId);
        console.info('characterId: ' + characterId);
        console.groupEnd();

        var character = svc.character(membershipType, membershipId, characterId);
        character.then(function successCallback (response) {

            console.group(logPrefix + 'character successCallback');
            console.log(response);
            vm.characterResponse = angular.toJson(response, true);
            console.groupEnd();

        });

        return character;

    };

    vm.searchDestinyPlayer = function (destinyPlayer) {

        console.group(logPrefix + 'searchDestinyPlayer');
        console.info('destinyPlayer: ' + destinyPlayer);
        console.groupEnd();

        var searchDestinyPlayer = svc.searchDestinyPlayer(destinyPlayer);
        searchDestinyPlayer.then(function successCallback (response) {

            console.group(logPrefix + 'searchDestinyPlayer successCallback');
            console.log(response);
            vm.searchDestinyPlayerResponse = angular.toJson(response, true);
            console.groupEnd();

        });

        return searchDestinyPlayer;

    };

  });