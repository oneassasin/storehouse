'use strict';

angular
    .module('app.storehouse')
    .controller('StorehouseController', StorehouseController);

StorehouseController.$inject = ['$stateParams'];
function StorehouseController($stateParams) {
    const vm = this;
    vm.storehouseId = $stateParams.storehouseId;
    vm.menus = [
        {
            path: 'app.storehouse.home({storehouseId: vm.storehouseId})',
            class: 'glyph stroked eye',
            svg: '#stroked-eye',
            name: 'Моніторинг'
        },
        {
            path: 'app.storehouse.calendar',
            class: 'glyph stroked calendar',
            svg: '#stroked-calendar',
            name: 'Календар подій'
        },
        {
            path: 'app.storehouse.statistics',
            class: 'glyph stroked line-graph',
            svg: '#stroked-line-graph',
            name: 'Статистика'
        },
        /*
        {
            path: 'app.storehouse.sectors.list({storehouseId: vm.storehouseId})',
            class: 'glyph stroked calendar',
            svg: '#stroked-calendar',
            name: 'Sectors'
        },
        {
            path: 'app.storehouse.goods.list({storehouseId: vm.storehouseId})',
            class: 'glyph stroked line-graph',
            svg: '#stroked-line-graph',
            name: 'Goods'
        },
        {
            path: 'app.storehouse.rfids.list',
            class: 'glyph stroked eye',
            svg: '#stroked-eye',
            name: 'RFIDs'
        },
        */
        {
            path: 'app.storehouse.inventory.list',
            class: 'glyph stroked table',
            svg: '#stroked-table',
            name: 'Інвертаризація'
        }
    ];
}
