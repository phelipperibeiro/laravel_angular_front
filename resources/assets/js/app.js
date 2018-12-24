//app.controllers depende de ngRoute
var app = angular.module('app', ['ngRoute', 'angular-oauth2', 'app.controllers']);


app.service('MyOAuthService', ['OAuth', '$window', function (OAuth, $window) {

        return {
            isAuthenticated: function (controller) {

                window.location.href;
                
                switch (controller) {
                    case LoginController:
                        if (OAuth.isAuthenticated()) {
                            $window.location.href = '/home';
                        }

                        break;
                    default:
                        if (!OAuth.isAuthenticated()) {
                            $window.location.href = '/login';
                        }
                        
                        break;
                }
            }
        };

    }]);



angular.module('app.controllers', ['angular-oauth2']);


// registrando as rotas com ($routeProvider)
app.config(['$routeProvider', 'OAuthProvider', function ($routeProvider, OAuthProvider) {

        $routeProvider
                .when('/login', {
                    templateUrl: 'build/views/login.html',
                    controller: 'LoginController'
                })
                .when('/home', {
                    templateUrl: 'build/views/home.html',
                    controller: 'HomeController'
                });

        OAuthProvider
                .configure({
                    baseUrl: 'http://localhost:8080',
                    grantPath: 'oauth/token',
                    clientId: '1',
                    // revokePath: '/oauth2/revoke',
                    // clientSecret: '4b2Ebj8AFb92tmxEYxZLhRUoqntMZNsawjGl1Uud', // optional
                });

    }]);

app.run(['$rootScope', '$window', 'OAuth', function ($rootScope, $window, OAuth) {

        $rootScope.$on('oauth:error', function (event, rejection) {
            // Ignore `invalid_grant` error - should be catched on `LoginController`.
            if ('invalid_grant' === rejection.data.error) {
                return;
            }

            if ('invalid_credentials' === rejection.data.error) {
                return;
            }

            // Refresh token when a `invalid_token` error occurs.
            if ('invalid_token' === rejection.data.error) {
                return OAuth.getRefreshToken();
            }

            // Redirect to `/login` with the `error_reason`.
            return $window.location.href = '/login?error_reason=' + rejection.data.error;
        });

    }]);


