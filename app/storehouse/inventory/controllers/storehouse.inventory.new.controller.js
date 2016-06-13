'use strict';

angular
    .module('app.storehouse')
    .controller('StorehouseInventoryNewController', StorehouseInventoryNewController);

StorehouseInventoryNewController.$inject = ['$log', '$stateParams', '$state', 'API'];
function StorehouseInventoryNewController($log, $stateParams, $state, API) {
    const vm = this;
    vm.storehouseId = $stateParams.storehouseId;
    vm.item = {};
    function createController(watchModel, fromCollection, toCollection) {
        return function ($scope, API) {
            $scope.$watch(watchModel, function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                if ($scope.model[$scope.options.key] && oldValue) {
                    $scope.model[$scope.options.key] = '';
                }
                $scope.to.loading = API.one(fromCollection, newValue).all(toCollection).getList()
                    .then(function (response) {
                        $scope.to.options = response.data;
                        return response.data;
                    })
                    .catch(function (error) {
                        $scope.to.options = [];
                    });
            });
        };
    }

    vm.fields = [
        {
            key: 'goodId',
            type: 'select',
            templateOptions: {
                required: true,
                label: 'Товар',
                valueProp: 'id',
                labelProp: 'name'
            },
            controller: function ($scope, API) {
                $scope.to.loading = API.one('storehouses', vm.storehouseId).all('goods').getList()
                    .then(function (response) {
                        $scope.to.options = response.data;
                        return response.data;
                    })
                    .catch(function (error) {
                        $scope.to.options = [];
                    });
            }
        },
        {
            key: 'rfidId',
            type: 'select',
            templateOptions: {
                required: true,
                label: 'RFID',
                valueProp: 'id',
                labelProp: 'value'
            },
            controller: function ($scope, API) {
                $scope.to.loading = API.all('rfids').getList()
                    .then(function (response) {
                        $scope.to.options = response.data;
                        return response.data;
                    })
                    .catch(function (error) {
                        $scope.to.options = [];
                    });
            }
        },
        {
            key: 'priority',
            type: 'input',
            templateOptions: {
                required: true,
                type: 'number',
                label: 'Пріоритет',
                placeholder: 'Введіть пріоритет'
            }
        },
        {
            key: 'shipmentAt',
            type: 'datepicker',
            templateOptions: {
                label: 'Відвантаження',
                type: 'text',
                datepickerPopup: 'dd-MMMM-yyyy'
            }
        },
        {
            key: 'sectorId',
            type: 'select',
            templateOptions: {
                required: true,
                label: 'Сектор',
                valueProp: 'id',
                labelProp: 'name'
            },
            controller: function ($scope, API) {
                $scope.to.loading = API.one('storehouses', vm.storehouseId).all('sectors').getList()
                    .then(function (response) {
                        $scope.to.options = response.data;
                        return response.data;
                    })
                    .catch(function (error) {
                        $scope.to.options = [];
                    });
            }
        },
        {
            key: 'rackId',
            type: 'select',
            templateOptions: {
                required: true,
                label: 'Стелаж',
                valueProp: 'id',
                labelProp: 'name'
            },
            controller: createController('model.sectorId', 'sectors', 'racks')
        },
        {
            key: 'shelfId',
            type: 'select',
            templateOptions: {
                required: true,
                label: 'Полиця',
                valueProp: 'id',
                labelProp: 'number'
            },
            controller: createController('model.rackId', 'racks', 'shelfes')
        }
    ];
    vm.create = function () {
        API.one('storehouses', vm.storehouseId).all('items').post(vm.item)
            .then(function (data) {
                $log.info(data);
                $state.go('app.storehouse.inventory.list');
            }, function (error) {
                $log.error(error);
            });
    };
    vm.cancel = function () {
        $state.go('app.storehouse.inventory.list');
    };
}
