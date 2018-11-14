angular.module('app.controllers')
        .controller('LoginController', ['$scope', '$location', 'OAuth', function ($scope, $location, OAuth) {
                $scope.user = {
                    username: '',
                    password: ''
                }

                $scope.login = function () {

                    //console.log($scope.user);

                    var success = function () {
                        //$location.path('home');
                        alert('success');
                    };

                    var fail = function () {
                        //alert('login invalido');
                        alert('fail');
                    };

                    // https://github.com/oauthjs/angular-oauth2
                    // https://github.com/oauthjs/angular-oauth2/blob/master/dist/angular-oauth2.js 

                    OAuth.getAccessToken($scope.user).then(success, fail);
                    
                }
            }]);

    