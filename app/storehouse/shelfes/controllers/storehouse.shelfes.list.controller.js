'use strict';

angular
    .module('app.storehouse')
    .controller('StorehouseShelfesListController', StorehouseShelfesListController);

StorehouseShelfesListController.$inject = ['$log', '$stateParams', '$state', 'API'];
function StorehouseShelfesListController($log, $stateParams, $state, API) {
    const vm = this;
    vm.lastShelfNumber = 0;
    vm.rackId = $stateParams.rackId;
    vm.shelfes = [];
    API.one('racks', vm.rackId).all('shelfes').getList().then(function (data) {
        vm.shelfes = data.data;
        vm.lastShelfNumber = Number(vm.shelfes[vm.shelfes.length - 1].id);
    }, function (error) {
        $log.error(error);
        if (error.status === 404) {
            $state.go('app.storehouse.shelfes.new', {lastShelfNumber: vm.lastShelfNumber});
        }
        // TODO: 25.05.16 Handle 400 error (Unauthorized)
    });
}
