//app.controllers depende de ngRoute
var app = angular.module('app', ['ngRoute','app.controllers']);


angular.module('app.controllers', []);


// registrando as rotas com ($routeProvider)
app.config(['$routeProvider', function ($routeProvider) {
    
    $routeProvider
        .when('/login', {
            templateUrl: 'build/views/login.html',
            controller: 'LoginController'
        })
        .when('/home', {
            templateUrl: 'build/views/home.html',
            controller: 'HomeController'
        });
       
}]);
