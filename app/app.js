'use strict';

angular
    .module('app', [
        'ui.router',
        'ui.bootstrap',
        'ui.grid',
        'formly',
        'formlyBootstrap',
        'ngCookies',
        'restangular',
        'app.sha1',
        'app.root',
        'app.login',
        'app.storehouses',
        'app.storehouse'
    ])
    .config(BaseConfigurator)
    .run(['$state', Runner]);

BaseConfigurator.$inject = ['$locationProvider', '$urlRouterProvider'];
function BaseConfigurator($locationProvider, $urlRouterProvider) {
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

Runner.$inject = ['$state'];
function Runner($state) {
    $state.go('app.login.new');
}
