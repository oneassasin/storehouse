'use strict';

angular
    .module('app.storehouse')
    .controller('StorehouseSectorsListController', StorehouseSectorsListController);

StorehouseSectorsListController.$inject = ['$log', '$stateParams', '$state', 'API'];
function StorehouseSectorsListController($log, $stateParams, $state, API) {
    const vm = this;
    vm.storehouseId = $stateParams.storehouseId;
    vm.sectors = [];
    API.one('storehouses', vm.storehouseId).all('sectors').getList().then(function (data) {
        vm.sectors = data.data;
    }, function (error) {
        $log.error(error);
        if (error.status === 404) {
            $state.go('app.storehouse.sectors.new');
        }
        // TODO: 25.05.16 Handle 400 error (Unauthorized)
    });
}
