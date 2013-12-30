angular.module('LocalStorageModule').value('prefix', 'openart');

angular.module('openart', ['ngRoute', 'LocalStorageModule'])
    .config(function ($routeProvider, $locationProvider) {
        console.log('in config');
        $routeProvider
            .when('/', {
                templateUrl: '/cdn/views/main.html',
                controller: 'MainCtrl'
            })
            .when('/page/:page', {
                templateUrl: '/cdn/views/main.html',
                controller: 'MainCtrl'
            })
            .when('/lovely', {
                templateUrl: '/cdn/views/lovely.html',
                controller: 'LovelyCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });