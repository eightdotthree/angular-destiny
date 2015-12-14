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

    var logPrefix = 'MainCtrl: ';
    var vm = this;
    var svc = DestinyService;

    vm.membershipTypes = MEMBERSHIP_TYPES;
    vm.membership = {
        displayName: 'eightdotthree',
        id: null,
        type: {
            id: vm.membershipTypes[1].id
        }
    };
    vm.selectedCharacter = {
        characterId: null
    };
    vm.characters = {};
    vm.account = {};

    /**
     *
     */
    function getClassName (id) {
        for (var i = 0; i < CLASS_TYPES.length; i++) {
            var classType = CLASS_TYPES[i];
            if (classType.id === id) {
                return classType.name;
            }
        }
        return null;
    }

    /**
     *
     */

    vm.getMembershipId = function () {

        console.group(logPrefix + 'getMembershipId');
            console.info('membershipType: ' + vm.membership.type.id);
            console.info('displayName: ' + vm.membership.displayName);
        console.groupEnd();

        var getMembershipIdByDisplayName = svc.getMembershipIdByDisplayName(vm.membership.type.id, vm.membership.displayName);
        getMembershipIdByDisplayName.then(function success (data) {

            console.group(logPrefix + 'getMembershipIdByDisplayName success');
                console.log(data);
            console.groupEnd();

            vm.membership.id = data.Response;

        });

        return getMembershipIdByDisplayName;

    };

    vm.accountSummary = function () {

        console.group(logPrefix + 'accountSummary');
            console.info('membershipType: ' + vm.membership.type.id);
            console.info('destinyMembershipId: ' + vm.membership.id);
        console.groupEnd();

        var accountSummary = svc.accountSummary(vm.membership.type.id, vm.membership.id);
        accountSummary.then(function success (data) {

            console.group(logPrefix + 'accountSummary success');
                console.info(data);
            console.groupEnd();

            vm.account = data.Response.data;
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

    vm.statsDefinition = function () {

        console.group(logPrefix + 'statsDefinition');
        console.groupEnd();

        var statsDefinition = svc.statsDefinition();
        statsDefinition.then(function success (data) {

            console.group(logPrefix + 'statsDefinition success');
            console.log(data);
            console.groupEnd();

        });

        return statsDefinition;

    };



    vm.characterSummary = function () {

        console.group(logPrefix + 'characterSummary');
            console.info('membershipType: ' + vm.membership.type.id);
            console.info('membershipId: ' + vm.membership.id);
            console.info('characterId: ' + vm.selectedCharacter.characterId);
        console.groupEnd();

        var characterSummary = svc.characterSummary(vm.membership.type.id, vm.membership.id, vm.selectedCharacter.characterId);

        characterSummary.then(function success (data) {

            console.group(logPrefix + 'characterSummary success');
                console.log(data);
            console.groupEnd();

        });

        return characterSummary;

    };

    vm.characterStats = function () {

        console.group(logPrefix + 'characterStats');
            console.info('membershipType: ' + vm.membership.type.id);
            console.info('membershipId: ' + vm.membership.id);
            console.info('characterId: ' + vm.selectedCharacter.characterId);
        console.groupEnd();

        var characterStats = svc.characterStats(vm.membership.type.id, vm.membership.id, vm.selectedCharacter.characterId);
        characterStats.then(function success (data) {

            console.group(logPrefix + 'characterStats success');
            console.log(data);
            console.groupEnd();

        });

        return characterStats;

    };

    vm.characterActivityHistory = function () {

        console.group(logPrefix + 'characterActivityHistory');
            console.info('membershipType: ' + vm.membership.type.id);
            console.info('membershipId: ' + vm.membership.id);
            console.info('characterId: ' + vm.selectedCharacter.characterId);
        console.groupEnd();

        var characterActivityHistory = svc.characterActivityHistory(vm.membership.type.id, vm.membership.id, vm.selectedCharacter.characterId);
        characterActivityHistory.then(function success (data) {

            console.group(logPrefix + 'characterActivityHistory success');
            console.log(data);
            console.groupEnd();

        });

        return characterActivityHistory;

    };

    vm.searchDestinyPlayer = function (params) {

        console.group(logPrefix + 'searchDestinyPlayer');
            console.info('destinyPlayer: ' + params.destinyPlayer);
        console.groupEnd();

        var searchDestinyPlayer = svc.searchDestinyPlayer(params.destinyPlayer);
        searchDestinyPlayer.then(function success (data) {

            console.group(logPrefix + 'searchDestinyPlayer success');
                console.log(data);
            console.groupEnd();

        });

        return searchDestinyPlayer;

    };

  });
