// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var router = angular.module('router', ['ngRoute']);

    // configure our routes
    router.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the home button
            .when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            // route for the prt page
            .when('/search', {
                templateUrl : 'pages/search.html',
                controller  : 'searchController'
            })
            
             // route for the login page
            .when('/login', {
                templateUrl : 'pages-login.html'
            })
            
            .when('/admin-index', {
                resolve:{
                    "check": function($location, $rootScope) {
                        if(!$rootScope.loggedIn) {
                            $location.path('/login');
                        }
                    }
                },
                templateUrl : 'admin-index.html'
            });
            
    });

    // router.controller('loginController', function($scope, $location, $rootScope){
    //   $scope.submit = function() {
    //        if($scope.email == '' && $scope.password == '') {
    //            $rootScope.loggedIn = true;
    //            $location.path('admin-index.html');
    //        } else {
    //            alert('Wrong Credentials');
    //        }
    //      }
    //    }); */
    
    
    // create the controller and inject Angular's $scope
    router.controller('mainController', function($scope, $location, $anchorScroll, $routeParams) {
        // create a message to display in our view

    });

    router.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    router.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    router.controller('searchController', function($scope) {

    });
