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
            });
            
    });


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
