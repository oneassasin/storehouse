'use strict';

angular
    .module('app.storehouse')
    .controller('StorehouseGoodsNewController', StorehouseGoodsNewController);

StorehouseGoodsNewController.$inject = ['$log', '$stateParams', '$state', 'API'];
function StorehouseGoodsNewController($log, $stateParams, $state, API) {
    const vm = this;
    vm.storehouseId = $stateParams.storehouseId;
    vm.good = {};
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
        API.one('storehouses', vm.storehouseId).one('goods').save(vm.good)
            .then(function (data) {
                $log.info(data);
                $state.go('app.storehouse.goods.list');
            }, function (error) {
                $log.error(error);
            });
    };
    vm.cancel = function () {
        $state.go('app.storehouse.goods.list');
    };
}
