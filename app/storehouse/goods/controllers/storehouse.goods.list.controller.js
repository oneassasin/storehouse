'use strict';

angular
    .module('app.storehouse')
    .controller('StorehouseGoodsListController', StorehouseGoodsListController);

StorehouseGoodsListController.$inject = ['$log', '$stateParams', '$state', 'API'];
function StorehouseGoodsListController($log, $stateParams, $state, API) {
    const vm = this;
    vm.storehouseId = $stateParams.storehouseId;
    vm.goods = [];
    API.one('storehouses', vm.storehouseId).all('goods').getList().then(function (data) {
        vm.goods = data.data;
    }, function (error) {
        $log.error(error);
        if (error.status === 404) {
            $state.go('app.storehouse.goods.new');
        }
        // TODO: 25.05.16 Handle 400 error (Unauthorized)
    });
}
