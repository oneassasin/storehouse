'use strict';

angular
    .module('app.storehouse')
    .controller('StorehouseRacksListController', StorehouseRacksListController);

StorehouseRacksListController.$inject = ['$log', '$stateParams', '$state', 'API'];
function StorehouseRacksListController($log, $stateParams, $state, API) {
    const vm = this;
    vm.sectorId = $stateParams.sectorId;
    vm.racks = [];
    API.one('sectors', vm.sectorId).all('racks').getList().then(function (data) {
        vm.racks = data.data;
    }, function (error) {
        $log.error(error);
        if (error.status === 404) {
            $state.go('app.storehouse.racks.new');
        }
        // TODO: 25.05.16 Handle 400 error (Unauthorized)
    });
}
