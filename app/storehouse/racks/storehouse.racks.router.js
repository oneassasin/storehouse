'use strict';

angular
    .module('app.storehouse')
    .config(['$stateProvider', StateConfigurator]);

function StateConfigurator($stateProvider) {
    $stateProvider
        .state('app.storehouse.racks', {
            abstract: true,
            url: '/sectors/{sectorId:int}/racks',
            template: '<div ui-view></div>'
        })
        .state('app.storehouse.racks.list', {
            url: '/',
            templateUrl: 'storehouse/racks/views/storehouse.racks.list.tmpl.html',
            controller: 'StorehouseRacksListController',
            controllerAs: 'vm'
        })
        .state('app.storehouse.racks.new', {
            url: '/',
            templateUrl: 'storehouse/racks/views/storehouse.racks.new.tmpl.html',
            controller: 'StorehouseRacksNewController',
            controllerAs: 'vm'
        });
}
