'use strict';

angular
    .module('app.storehouse')
    .config(['$stateProvider', StateConfigurator]);

function StateConfigurator($stateProvider) {
    $stateProvider
        .state('app.storehouse.rfids', {
            abstract: true,
            url: '/rfiids',
            template: '<div ui-view></div>'
        })
        .state('app.storehouse.rfids.list', {
            url: '/',
            templateUrl: 'storehouse/rfids/views/storehouse.rfids.list.tmpl.html',
            controller: 'StorehouseRFIDsListController',
            controllerAs: 'vm'
        })
        .state('app.storehouse.rfids.new', {
            url: '/',
            templateUrl: 'storehouse/rfids/views/storehouse.rfids.new.tmpl.html',
            controller: 'StorehouseRFIDsNewController',
            controllerAs: 'vm'
        });
}
