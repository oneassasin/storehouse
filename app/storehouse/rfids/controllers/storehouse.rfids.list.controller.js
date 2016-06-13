'use strict';

angular
    .module('app.storehouse')
    .controller('StorehouseRFIDsListController', StorehouseRFIDsListController);

StorehouseRFIDsListController.$inject = ['$log', '$state', 'API'];
function StorehouseRFIDsListController($log, $state, API) {
    const vm = this;
    vm.rfids = [];
    API.all('rfids').getList().then(function (data) {
        vm.rfids = data.data;
    }, function (error) {
        $log.error(error);
        if (error.status === 404) {
            $state.go('app.storehouse.rfids.new');
        }
        // TODO: 25.05.16 Handle 400 error (Unauthorized)
    });
}
