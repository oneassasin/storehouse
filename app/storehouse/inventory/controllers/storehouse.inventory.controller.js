'use strict';

angular
    .module('app.storehouse')
    .controller('StorehouseInventoryController', StorehouseInventoryController);

StorehouseInventoryController.$inject = ['$log', '$stateParams', '$state', '$scope', 'API'];
function StorehouseInventoryController($log, $stateParams, $state, $scope, API) {
    const vm = this;
    vm.storehouseId = $stateParams.storehouseId;
    vm.selectedRow = null;
    vm.deleteItem = function () {
        if (vm.selectedRow === null) {
            return;
        }
        function underscoring(string) {
            return string.replace(/([A-Z])/g, function ($1) {
                return '_' + $1.toLowerCase();
            });
        }

        API.one('storehouses', vm.storehouseId)
            .one('items', vm.selectedRow[underscoring('goodId')])
            .remove({rfidId: vm.selectedRow[underscoring('rfidId')]})
            .then(function (response) {
                vm.updateData();
            })
            .catch(function (error) {
                vm.updateData();
            });
    };
    vm.gridOptions = {
        enablePaginationControls: false,
        enableSorting: true,
        enableRowSelection: true,
        paginationPageSize: 20,
        columnDefs: [
            {field: 'rfid_value', displayName: 'RFID мітка', enableSorting: false},
            {field: 'good_name', displayName: 'Найменування'},
            {field: 'rack_shelf_name', displayName: 'Місцезнаходження'},
            {field: 'created_at', displayName: 'Дата прийому', enableSorting: false},
            {field: 'shipment_at', displayName: 'Дата відвантаження'}
        ]
    };
    vm.gridOptions.multiSelect = false;
    vm.gridOptions.onRegisterApi = function (gridAPI) {
        vm.gridAPI = gridAPI;
        vm.gridAPI.selection.on.rowSelectionChanged($scope, function (row) {
            if (row.isSelected) {
                vm.selectedRow = row.entity;
            } else {
                vm.selectedRow = null;
            }
        });
    };
    vm.savedItems = [];
    vm.updateData = function () {
        API.one('storehouses', vm.storehouseId).all('items').getList()
            .then(function (response) {
                vm.gridOptions.data = response.data;
            })
            .catch(function (error) {
                if (error.status === 404) {
                    vm.gridOptions.data = [];
                }
            });
    };
    vm.updateData();
}
