'use strict';

angular
    .module('app.root')
    .service('AuthService', AuthService);

AuthService.$inject = ['$q', 'API', '$cookies'];
function AuthService($q, API, $cookies) {
    const vm = this;
    vm._isAuth = false;
    vm.isAuth = function () {
        const cookie = $cookies.get('SID');
        const toString = Object.prototype.toString;
        vm._isAuth = angular.isDefined(cookie) &&
            toString.call(cookie) === '[object String]' &&
            cookie.length !== 0;
        return vm._isAuth;
    };
    vm.isAuthPromise = function () {
        return $q(function (resolve, reject) {
            if (vm.isAuth()) {
                resolve({auth: true});
            } else {
                reject({auth: false});
            }
        });
    };
    vm.logIn = function (user) {
        return $q(function (resolve, reject) {
            API.all('user').all('auth').post(user).then(function (result) {
                vm.isAuth();
                resolve(result);
            }, function (error) {
                vm.isAuth();
                reject(error);
            });
        });
    };
    vm.logOut = function () {
        return $q(function (resolve, reject) {
            API.all('user').all('auth').remove().then(function (result) {
                vm.isAuth();
                resolve(result);
            }, function (error) {
                vm.isAuth();
                reject(error);
            });
        });
    };
}
