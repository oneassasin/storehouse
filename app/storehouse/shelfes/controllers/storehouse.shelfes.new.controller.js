'use strict';

angular
    .module('app.storehouse')
    .controller('StorehouseShelfesNewController', StorehouseShelfesNewController);

StorehouseShelfesNewController.$inject = ['$log', '$stateParams', '$state', 'API'];
function StorehouseShelfesNewController($log, $stateParams, $state, API) {
    const vm = this;
    vm.rackId = $stateParams.rackId;
    vm.lastShelfNumber = $stateParams.lastShelfNumber;
    vm.shelf = {
        number: vm.lastShelfNumber + 1
    };
    vm.fields = [
        {
            key: 'number',
            type: 'input',
            templateOptions: {
                required: true,
                type: 'number',
                label: 'Number',
                placeholder: 'Enter number',
                disabled: true
            }
        }
    ];
    vm.create = function () {
        API.one('racks', vm.rackId).all('shelfes').post(vm.shelf)
            .then(function (data) {
                $log.info(data);
                $state.go('app.storehouse.shelfes.list');
            }, function (error) {
                $log.error(error);
            });
    };
    vm.cancel = function () {
        $state.go('app.storehouse.shelfes.list');
    };
}
