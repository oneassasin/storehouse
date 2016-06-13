'use strict';

angular
    .module('app.storehouse')
    .controller('StorehouseHomeController', StorehouseHomeController);

StorehouseHomeController.$inject = ['$log', '$stateParams', 'API'];
function StorehouseHomeController($log, $stateParams, API) {
    const vm = this;
    vm.storehouseId = $stateParams.storehouseId;
    vm.currentStorehouseAPI = API.one('storehouses', vm.storehouseId);
    vm.messages = [];
    vm.newMessage = {};
    vm.newMessageField = [
        {
            key: 'message',
            type: 'input',
            templateOptions: {
                required: true,
                placeholder: 'Введіть повідомлення тут...'
            }
        }
    ];
    vm.gridOptions = {
        enablePaginationControls: false,
        enableSorting: true,
        paginationPageSize: 20,
        columnDefs: [
            {field: 'rfid_value', displayName: 'RFID мітка', enableSorting: false},
            {field: 'good_name', displayName: 'Найменування'},
            {field: 'rack_shelf_name', displayName: 'Місцезнаходження'},
            {field: 'created_at', displayName: 'Дата прийому', enableSorting: false},
            {field: 'shipment_at', displayName: 'Дата відвантаження'}
        ]
    };
    vm.gridOptions.onRegisterApi = function (gridAPI) {
        vm.gridAPI = gridAPI;
    };
    API.one('storehouses', vm.storehouseId).all('items').getList().then(function (response) {
        vm.gridOptions.data = response.data;
    }, function (error) {
        $log.error(error);
    });
    vm.sendMessage = function () {
        vm.currentStorehouseAPI.all('messages').post(vm.newMessage).then(function (response) {
            $log.debug(response);
            if (response.status === 201) {
                vm.messages.push(response.data);
                vm.newMessage.message = '';
            }
        }, function (error) {
            $log.error(error);
        });
    };
    vm.currentStorehouseAPI.all('messages').getList().then(function (data) {
        vm.messages.length = 0;
        angular.forEach(data.data, function (item) {
            vm.messages.push(item);
        });
    }, function (error) {
        $log.error(error);
    });
}
