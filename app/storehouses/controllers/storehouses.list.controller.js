'use strict';

angular
    .module('app.storehouses')
    .controller('StorehousesListController', StorehousesListController);

StorehousesListController.$inject = ['$log', '$state', 'API'];
function StorehousesListController($log, $state, API) {
    const vm = this;
    vm.storehouses = [];
    API.one('/storehouses').getList().then(function (data) {
        vm.storehouses = data.data;
    }, function (error) {
        $log.error(error);
        if (error.status === 404) {
            $state.go('app.storehouses.new');
        }
    });
}
