'use strict';

angular
    .module('app.storehouse')
    .config(['$stateProvider', StateConfigurator]);

function StateConfigurator($stateProvider) {
    $stateProvider
        .state('app.storehouse.calendar', {
            url: '/calendar',
            templateUrl: 'storehouse/calendar/views/storehouse.calendar.tmpl.html'
        });

}
