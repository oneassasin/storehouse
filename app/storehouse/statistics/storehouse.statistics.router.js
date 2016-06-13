'use strict';

angular
    .module('app.storehouse')
    .config(['$stateProvider', StateConfigurator]);

function StateConfigurator($stateProvider) {
    $stateProvider
        .state('app.storehouse.statistics', {
            url: '/statistics',
            templateUrl: 'storehouse/statistics/views/storehouse.statistics.tmpl.html'
        });

}
