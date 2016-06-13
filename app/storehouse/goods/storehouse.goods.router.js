'use strict';

angular
    .module('app.storehouse')
    .config(['$stateProvider', StateConfigurator]);

function StateConfigurator($stateProvider) {
    $stateProvider
        .state('app.storehouse.goods', {
            abstract: true,
            url: '/goods',
            template: '<div ui-view></div>'
        })
        .state('app.storehouse.goods.list', {
            url: '/',
            templateUrl: 'storehouse/goods/views/storehouse.goods.list.tmpl.html',
            controller: 'StorehouseGoodsListController',
            controllerAs: 'vm'
        })
        .state('app.storehouse.goods.new', {
            url: '/',
            templateUrl: 'storehouse/goods/views/storehouse.goods.new.tmpl.html',
            controller: 'StorehouseGoodsNewController',
            controllerAs: 'vm'
        });
}
