'use strict';

angular
    .module('app.root')
    .factory('API', API);

API.$inject = ['RestangularProvider', '$state', '$location', '$cookies'];
function API(RestangularProvider, $state, $location, $cookies) {
    return RestangularProvider.withConfig(function (RestangularConfigurer) {
        RestangularConfigurer.setFullResponse(true);
        const baseUrl = $location.protocol() + '://' + $location.host() + ':' +
            $location.port() + '/api';
        RestangularConfigurer.setBaseUrl(baseUrl);
        RestangularConfigurer.setErrorInterceptor(function (response, deferred, responseHandler) {
            if (response.status === 401) {
                $cookies.remove('SID');
                $state.go('app.login.new');
                return false;
            }
            return true;
        });
    });
}
