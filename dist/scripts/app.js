(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

    $stateProvider
        .state('landing', {
            url: '/',
            controller: 'LandingCtrl as landing',
            templateUrl: '/templates/landing.html'
        })
        .state('up', {
            url: '/up',
            controller: 'MessagesCtrl as messages',
            templateUrl: '/templates/up.html'
        })
        .state('down', {
            url: '/down',
            controller: 'MessagesCtrl as messages',
            templateUrl: '/templates/down.html'
        });
    }


angular
    .module('blocChat', ['ui.router', 'firebase'])
    .config(config);
})();
