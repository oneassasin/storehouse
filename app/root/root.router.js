'use strict';

angular
    .module('app.root', [])
    .config(['$stateProvider', StateConfigurator]);

function StateConfigurator($stateProvider) {
    $stateProvider
        .state('app', {
            abstract: true,
            templateUrl: 'root/views/root.tmpl.html',
            controller: 'RootController',
            controllerAs: 'vm'
        });
}
