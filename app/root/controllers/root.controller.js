'use strict';

angular
    .module('app.root')
    .controller('RootController', RootController);

RootController.$inject = ['$log', '$state', '$scope', 'AuthService'];
function RootController($log, $state, $scope, AuthService) {
    const vm = this;
    vm.isUserAuth = false;
    $scope.$watch(function () {
        return AuthService.isAuth();
    }, function (newValue) {
        vm.isUserAuth = newValue;
    });
    vm.userMenus = [
        //{path: 'user', name: 'Користувач', icon: '#stroked-male-user'},
        //{path: 'settings', name: 'Налаштування', icon: '#stroked-gear'}
    ];
    vm.logOut = function () {
        AuthService.logOut().then(function (result) {
            $state.go('app.login.new');
        }, function (error) {
            $log.error(error);
        });
    };
}
