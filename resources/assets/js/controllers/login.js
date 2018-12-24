angular.module('app.controllers')
        .controller('LoginController', ['$scope', '$location', 'OAuth', 'MyOAuthService', function ($scope, $location, OAuth, MyOAuthService) {
                
                MyOAuthService.isAuthenticated();
                        
                $scope.user = {
                    username: '',
                    password: ''
                }

                $scope.error = {
                    message: '',
                    error: false
                }

                $scope.login = function () {

                    //console.log($scope.user);

                    var success = function () {
                        //$location.path('home');
                        alert('success');
                    };

                    var fail = function (data) {

                        //console.log(data);

                        var msg = [];
                        $.each(data.data.message, function (index, value) {  
                            msg.push(value[0]);
                        });
                        
                        $scope.error.error = true;
                        $scope.error.message = msg;
                    };

                    // https://github.com/oauthjs/angular-oauth2
                    // https://github.com/oauthjs/angular-oauth2/blob/master/dist/angular-oauth2.js 

                    OAuth.getAccessToken($scope.user).then(success, fail);

                }
                
            }]);

    