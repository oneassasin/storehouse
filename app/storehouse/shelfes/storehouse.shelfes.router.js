'use strict';

angular
    .module('app.storehouse')
    .config(['$stateProvider', StateConfigurator]);

function StateConfigurator($stateProvider) {
    $stateProvider
        .state('app.storehouse.shelfes', {
            abstract: true,
            url: '/racks/{rackId:int}/shelfes',
            template: '<div ui-view></div>'
        })
        .state('app.storehouse.shelfes.list', {
            url: '/',
            templateUrl: 'storehouse/shelfes/views/storehouse.shelfes.list.tmpl.html',
            controller: 'StorehouseShelfesListController',
            controllerAs: 'vm'
        })
        .state('app.storehouse.shelfes.new', {
            url: '/',
            templateUrl: 'storehouse/shelfes/views/storehouse.shelfes.new.tmpl.html',
            controller: 'StorehouseShelfesNewController',
            controllerAs: 'vm',
            params: {
                lastShelfNumber: 1
            }
        });
}
