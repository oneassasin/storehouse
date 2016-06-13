'use strict';

angular
    .module('app.storehouse')
    .config(['$stateProvider', StateConfigurator])
    .run(['formlyConfig', FormlyRunner]);

function StateConfigurator($stateProvider) {
    $stateProvider
        .state('app.storehouse.inventory', {
            abstract: true,
            url: '/inventory',
            template: '<div ui-view></div>'
        })
        .state('app.storehouse.inventory.list', {
            url: '/',
            templateUrl: 'storehouse/inventory/views/storehouse.inventory.tmpl.html',
            controller: 'StorehouseInventoryController',
            controllerAs: 'vm'
        })
        .state('app.storehouse.inventory.new', {
            url: '/',
            templateUrl: 'storehouse/inventory/views/storehouse.inventory.new.tmpl.html',
            controller: 'StorehouseInventoryNewController',
            controllerAs: 'vm'
        });

}

function FormlyRunner(formlyConfig) {
    const attributes = [
        'date-disabled',
        'custom-class',
        'show-weeks',
        'starting-day',
        'init-date',
        'min-mode',
        'max-mode',
        'format-day',
        'format-month',
        'format-year',
        'format-day-header',
        'format-day-title',
        'format-month-title',
        'year-range',
        'shortcut-propagation',
        'datepicker-popup',
        'show-button-bar',
        'current-text',
        'clear-text',
        'close-text',
        'close-on-date-selection',
        'datepicker-append-to-body'
    ];
    const bindings = [
        'datepicker-mode',
        'min-date',
        'max-date'
    ];
    var ngModelAttrs = {};
    angular.forEach(attributes, function (attr) {
        ngModelAttrs[camelize(attr)] = {attribute: attr};
    });
    angular.forEach(bindings, function (binding) {
        ngModelAttrs[camelize(binding)] = {bound: binding};
    });
    formlyConfig.setType({
        name: 'datepicker',
        templateUrl: 'datepicker.html',
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        defaultOptions: {
            ngModelAttrs: ngModelAttrs,
            templateOptions: {
                datepickerOptions: {
                    format: 'MM.dd.yyyy',
                    initDate: new Date()
                }
            }
        },
        controller: DateTimeController
    });
    DateTimeController.$inject = ['$scope'];
    function DateTimeController($scope) {
        $scope.datepicker = {};
        $scope.datepicker.opened = false;
        $scope.datepicker.open = function ($event) {
            $scope.datepicker.opened = !$scope.datepicker.opened;
        };
    }
    function camelize(string) {
        string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
            return chr ? chr.toUpperCase() : '';
        });
        // Ensure 1st char is always lowercase
        return string.replace(/^([A-Z])/, function (match, chr) {
            return chr ? chr.toLowerCase() : '';
        });
    }
}
