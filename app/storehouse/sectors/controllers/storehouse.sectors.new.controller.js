'use strict';

angular
    .module('app.storehouse')
    .controller('StorehouseSectorsNewController', StorehouseSectorsNewController);

StorehouseSectorsNewController.$inject = ['$log', '$stateParams', '$state', 'API'];
function StorehouseSectorsNewController($log, $stateParams, $state, API) {
    const vm = this;
    vm.storehouseId = $stateParams.storehouseId;
    $log.debug('Selected storehouse ID: ', vm.storehouseId);
    vm.sector = {};
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
        API.one('storehouses', vm.storehouseId).one('sectors').save(vm.sector)
            .then(function (data) {
                $log.info(data);
                $state.go('app.storehouse.sectors.list');
            }, function (error) {
                $log.error(error);
                // TODO: 28.05.16 Handle 400 error (Results not found)
            });
    };
    vm.cancel = function () {
        $state.go('app.storehouse.sectors.list');
    };
}
