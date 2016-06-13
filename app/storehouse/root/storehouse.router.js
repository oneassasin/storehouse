'use strict';

angular
    .module('app.storehouse', [
        'ui.grid.pagination',
        'ui.grid.pinning',
        'ui.grid.resizeColumns',
        'ui.grid.moveColumns',
        'ui.grid.selection'
    ])
    .config(['$stateProvider', StateConfigurator]);

function StateConfigurator($stateProvider) {
    $stateProvider
        .state('app.storehouse', {
            abstract: true,
            url: '/storehouses/{storehouseId:int}',
            templateUrl: 'storehouse/root/views/storehouse.tmpl.html',
            controller: 'StorehouseController',
            controllerAs: 'vm'
        });
}
