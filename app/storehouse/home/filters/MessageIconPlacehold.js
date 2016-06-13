'use strict';

angular
    .module('app.storehouse')
    .filter('messageIconPlacehold', messageIconPlacehold);

function messageIconPlacehold() {
    return function (userName) {
        const name = userName.split('@')[0];
        return 'http://placehold.it/80/dde0e6/5f6468?text=' + name;
    };
}
