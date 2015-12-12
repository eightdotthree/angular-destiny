'use strict';

/**
 * @ngdoc service
 * @name destinyApp.modes
 * @description
 * # modes
 * Constant in the destinyApp.
 */
angular.module('destinyApp')
    .constant('MODES', {
        NONE:               'None',
        STORY:              'Story',
        STRIKE:             'Strike',
        RAID:               'Raid',
        ALL_PVP:            'AllPvP',
        PATROL:             'Patrol',
        ALL_PVP:            'AllPvE',
        PVP_INTRODUCTION:   'PvPIntroduction',
        THREE_VS_THREE:     'ThreeVsThree',
        CONTROL:            'Control',
        LOCKOWN:            'Lockdown',
        TEAM:               'Team',
        FREE_FOR_ALL:       'FreeForAll',
        NIGHTFALL:          'Nightfall',
        HEROIC:             'Heroic',
        ALL_STRIKES:        'AllStrikes',
        IRON_BANNER:        'IronBanner',
        ALL_ARENA:          'AllArena',
        ARENA:              'Arena',
        ARENA_CHALLENGE:    'ArenaChallenge',
        TRIALS_OF_OSIRIS:   'TrialsOfOsiris',
        ELIMINATION:        'Elimination',
        RIFT:               'Rift',
        MAYHEM:             'Mayhem',
        ZONE_CONTROL:       'ZoneControl',
        RACING:             'Racing'
    });
