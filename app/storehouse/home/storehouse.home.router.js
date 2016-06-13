'use strict';

angular
    .module('app.storehouse')
    .config(['$stateProvider', StateConfigurator]);

function StateConfigurator($stateProvider) {
    $stateProvider
        .state('app.storehouse.home', {
            url: '/',
            templateUrl: 'storehouse/home/views/storehouse.home.tmpl.html',
            controller: 'StorehouseHomeController',
            controllerAs: 'vm'
        });
}
