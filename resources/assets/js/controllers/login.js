angular.module('app.controllers')
        .controller('LoginController', ['$scope', '$location', 'MyOAuthService', function ($scope, $location, MyOAuthService) {
                
                //MyOAuthService.isAuthenticated();            
                        
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
                        
                        $scope.error.error = false;
                        
                        $location.path('home');
                        //alert('success');
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

                    MyOAuthService.authenticate($scope.user, success, fail);

                }
                
            }]);

    