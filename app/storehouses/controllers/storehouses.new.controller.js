'use strict';

angular
    .module('app.storehouses')
    .controller('StorehousesNewController', StorehousesNewController);

StorehousesNewController.$inject = ['$log', '$state', 'API'];
function StorehousesNewController($log, $state, API) {
    const vm = this;
    vm.storehouse = {};
    vm.fields = [
        {
            key: 'name',
            type: 'input',
            templateOptions: {
                required: true,
                type: 'text',
                label: 'Назва',
                placeholder: 'Введіть назву'
            }
        }
    ];
    vm.create = function () {
        API.all('/storehouses').post(vm.storehouse).then(function (data) {
            $log.info(data);
            $state.go('app.storehouses.list');
        }, function (error) {
            $log.error(error);
        });
    };
    vm.cancel = function () {
        $state.go('app.storehouses.list');
    };
}
