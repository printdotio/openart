angular.module('openart', ['ngRoute'])
    .config(function ($routeProvider) {
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
            .otherwise({
                redirectTo: '/'
            });
    });

