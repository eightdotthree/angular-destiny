'use strict';

/**
 * @ngdoc function
 * @name destinyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the destinyApp
 */
angular.module('destinyApp')
  .controller('MainCtrl', function ($scope, DestinyService, MEMBERSHIP_TYPES, CLASS_TYPES) {

    var vm = this;
    var logPrefix = 'MainCtrl: ';
    var svc = DestinyService;

    vm.membershipTypes = MEMBERSHIP_TYPES;
    vm.membership = {
        displayName: 'eightdotthree',
        type: {
            id: vm.membershipTypes[1].id
        }
    };

    vm.selectedCharacter = {};
    vm.characters = {};
    vm.account = {};

    function getClassName (id) {
        for (var i = 0; i < CLASS_TYPES.length; i++) {
            var classType = CLASS_TYPES[i];
            if (classType.id === id) {
                return classType.name;
            }
        }
        return null;
    }

    vm.getMembershipId = function () {

        console.group(logPrefix + 'getMembershipId');
            console.info(vm.membership);
        console.groupEnd();

        var getMembershipIdByDisplayName = svc.getMembershipIdByDisplayName(
            {
                membershipType: vm.membership.type.id,
                displayName: vm.membership.displayName
            }
        );

        getMembershipIdByDisplayName.then(function success (response) {

            console.group(logPrefix + 'getMembershipIdByDisplayName success');
                console.log(response);
            console.groupEnd();

            vm.membership.id = response.data.Response;

        });

        return getMembershipIdByDisplayName;
    };


    vm.accountSummary = function (params) {

        console.group(logPrefix + 'accountSummary');
            console.info('membershipType: ' + params.membershipType);
            console.info('destinyMembershipId: ' + params.destinyMembershipId);
        console.groupEnd();

        var accountSummary = svc.accountSummary(params.membershipType, params.destinyMembershipId);
        accountSummary.then(function successCallback (response) {

            console.group(logPrefix + 'accountSummary successCallback');
                console.info(response);
            console.groupEnd();

            vm.account = response.data.Response.data;
            vm.characters = [];

            for (var i = 0; i < vm.account.characters.length; i++) {
                var value = vm.account.characters[i];
                var character = {
                    characterId: value.characterBase.characterId,
                    name: getClassName(value.characterBase.classType) + ' — ' + value.characterLevel + ' — ' + value.characterBase.powerLevel
                };
                vm.characters.push(character);
            }

            vm.selectedCharacter = vm.characters[0];

        });

        return accountSummary;

    };

    vm.activityHistory = function (params) {

        console.group(logPrefix + 'activityHistory');
        console.info('membershipType: ' + params.membershipType);
        console.info('membershipId: ' + params.destinyMembershipId);
        console.info('characterId: ' + params.characterId);
        console.groupEnd();

        var activityHistory = svc.activityHistory(params.membershipType, params.destinyMembershipId, params.characterId);
        activityHistory.then(function successCallback (response) {

            console.group(logPrefix + 'activityHistory successCallback');
            console.log(response);
            vm.activityHistoryResponse = angular.toJson(response, true);
            console.groupEnd();

        });

        return activityHistory;

    };

    vm.statsDefinition = function () {

        console.group(logPrefix + 'statsDefinition');
        console.groupEnd();

        var statsDefinition = svc.statsDefinition();
        statsDefinition.then(function successCallback (response) {

            console.group(logPrefix + 'statsDefinition successCallback');
            console.log(response);
            vm.statsDefinitionResponse = angular.toJson(response, true);
            console.groupEnd();

        });

        return statsDefinition;

    };

    vm.characterStats = function (params) {

        console.group(logPrefix + 'characterStats');
        console.info('membershipType: ' + params.membershipType);
        console.info('membershipId: ' + params.destinyMembershipId);
        console.info('characterId: ' + params.characterId);
        console.groupEnd();

        var characterStats = svc.characterStats(params.membershipType, params.destinyMembershipId, params.characterId);
        characterStats.then(function successCallback (response) {

            console.group(logPrefix + 'characterStats successCallback');
            console.log(response);
            vm.characterStatsResponse = angular.toJson(response, true);
            console.groupEnd();

        });

        return characterStats;

    };

    vm.characterSummary = function (params) {

        console.group(logPrefix + 'characterSummary');
        console.info('membershipType: ' + params.membershipType);
        console.info('membershipId: ' + params.destinyMembershipId);
        console.info('characterId: ' + params.characterId);
        console.groupEnd();

        var characterSummary = svc.characterSummary(params.membershipType, params.destinyMembershipId, params.characterId);
        characterSummary.then(function successCallback (response) {

            console.group(logPrefix + 'characterSummary successCallback');
            console.log(response);
            vm.characterResponse = angular.toJson(response, true);
            console.groupEnd();

        });

        return characterSummary;

    };

    vm.searchDestinyPlayer = function (params) {

        console.group(logPrefix + 'searchDestinyPlayer');
        console.info('destinyPlayer: ' + params.destinyPlayer);
        console.groupEnd();

        var searchDestinyPlayer = svc.searchDestinyPlayer(params.destinyPlayer);
        searchDestinyPlayer.then(function successCallback (response) {

            console.group(logPrefix + 'searchDestinyPlayer successCallback');
            console.log(response);
            vm.searchDestinyPlayerResponse = angular.toJson(response, true);
            console.groupEnd();

        });

        return searchDestinyPlayer;

    };

  });