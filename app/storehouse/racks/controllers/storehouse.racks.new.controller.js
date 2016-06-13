'use strict';

angular
    .module('app.storehouse')
    .controller('StorehouseRacksNewController', StorehouseRacksNewController);

StorehouseRacksNewController.$inject = ['$log', '$stateParams', '$state', 'API'];
function StorehouseRacksNewController($log, $stateParams, $state, API) {
    const vm = this;
    vm.sectorId = $stateParams.sectorId;
    vm.rack = {};
    vm.fields = [
        {
            key: 'name',
            type: 'input',
            templateOptions: {
                required: true,
                type: 'text',
                label: 'Name',
                placeholder: 'Enter name'
            }
        }
    ];
    vm.create = function () {
        API.one('sectors', vm.sectorId).all('racks').post(vm.rack)
            .then(function (data) {
                $log.info(data);
                $state.go('app.storehouse.racks.list');
            }, function (error) {
                $log.error(error);
                // TODO: 28.05.16 Handle 400 error (Results not found)
            });
    };
    vm.cancel = function () {
        $state.go('app.storehouse.racks.list');
    };
}
