'use strict';

angular
    .module('app.storehouse')
    .controller('StorehouseRFIDsNewController', StorehouseRFIDsNewController);

StorehouseRFIDsNewController.$inject = ['$log', '$state', 'API'];
function StorehouseRFIDsNewController($log, $state, API) {
    const vm = this;
    vm.rfid = {};
    vm.fields = [
        {
            key: 'value',
            type: 'input',
            templateOptions: {
                required: true,
                type: 'text',
                label: 'Value',
                placeholder: 'Enter value'
            }
        }
    ];
    vm.create = function () {
        API.all('rfids').post(vm.rfid)
            .then(function (data) {
                $log.info(data);
                $state.go('app.storehouse.rfids.list');
            }, function (error) {
                $log.error(error);
            });
    };
    vm.cancel = function () {
        $state.go('app.storehouse.rfids.list');
    };
}
