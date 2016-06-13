'use strict';

angular
    .module('app.login', [])
    .config(['$stateProvider', StateConfigurator]);

function StateConfigurator($stateProvider) {
    $stateProvider
        .state('app.login', {
            abstract: true,
            template: '<div ui-view></div>'
        })
        .state('app.login.new', {
            url: '/login',
            templateUrl: 'login/views/login.new.tmpl.html',
            controller: 'LoginNewController',
            controllerAs: 'vm'
        });
}
