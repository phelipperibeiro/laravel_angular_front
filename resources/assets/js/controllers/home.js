angular.module('app.controllers')
        .controller('HomeController', ['$scope', 'MyOAuthService', function ($scope, MyOAuthService) {

                MyOAuthService.isAuthenticated();



            }]);