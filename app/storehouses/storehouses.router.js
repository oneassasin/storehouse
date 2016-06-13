'use strict';

angular
    .module('app.storehouses', [
        'ui.bootstrap.tabs'
    ])
    .config(['$stateProvider', StateConfigurator]);

function StateConfigurator($stateProvider) {
    $stateProvider
        .state('app.storehouses', {
            abstract: true,
            url: '/storehouses',
            template: '<div ui-view></div>'
        })
        .state('app.storehouses.list', {
            url: '/',
            templateUrl: 'storehouses/views/storehouses.list.tmpl.html',
            controller: 'StorehousesListController',
            controllerAs: 'vm'
        })
        .state('app.storehouses.new', {
            url: '/',
            templateUrl: 'storehouses/views/storehouses.new.tmpl.html',
            controller: 'StorehousesNewController',
            controllerAs: 'vm'
        });
}
