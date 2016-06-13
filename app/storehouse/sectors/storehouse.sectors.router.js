'use strict';

angular
    .module('app.storehouse')
    .config(['$stateProvider', StateConfigurator]);

function StateConfigurator($stateProvider) {
    $stateProvider
        .state('app.storehouse.sectors', {
            abstract: true,
            url: '/sectors',
            template: '<div ui-view></div>'
        })
        .state('app.storehouse.sectors.list', {
            url: '/',
            templateUrl: 'storehouse/sectors/views/storehouse.sectors.list.tmpl.html',
            controller: 'StorehouseSectorsListController',
            controllerAs: 'vm'
        })
        .state('app.storehouse.sectors.new', {
            url: '/',
            templateUrl: 'storehouse/sectors/views/storehouse.sectors.new.tmpl.html',
            controller: 'StorehouseSectorsNewController',
            controllerAs: 'vm'
        });
}
