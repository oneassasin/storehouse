'use strict';

angular
    .module('app.login')
    .controller('LoginNewController', LoginNewController);

LoginNewController.$inject = ['$state', 'sha1', 'AuthService'];
function LoginNewController($state, sha1, AuthService) {
    const vm = this;
    vm.userModel = {};
    vm.alerts = [];
    const _addAlert = function (type, message) {
        vm.alerts.push({type: type, message: message});
    };
    vm.addError = function (message) {
        _addAlert('danger', message);
    };
    vm.addInfo = function (message) {
        _addAlert('info', message);
    };
    vm.removeAlert = function (index) {
        vm.alerts.splice(index, 1);
    };
    vm.userFields = [
        {
            key: 'email',
            type: 'input',
            templateOptions: {
                required: true,
                type: 'email',
                label: 'Email',
                placeholder: 'Введіть Email'
            }
        },
        {
            key: 'password',
            type: 'input',
            templateOptions: {
                required: true,
                type: 'password',
                label: 'Пароль',
                placeholder: 'Введіть пароль'
            }
        }
    ];
    vm.logIn = function () {
        const data = {
            login: vm.userModel.email,
            password: sha1(vm.userModel.password)
        };
        AuthService.logIn(data).then(function (result) {
            if (result.status === 200 || result.status === 201) {
                $state.go('app.storehouses.list');
            }
        }, function (error) {
            if (error.status === 404) {
                vm.addError('Не знайдено користувача.');
            }
            if (error.status === 500) {
                vm.addError('Серверна помилка.');
            }
        });
    };
    if (AuthService.isAuth()) {
        $state.go('app.storehouses.list');
    }
}
