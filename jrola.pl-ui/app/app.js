'use strict';

// Declare app level module which depends on views, and components

angular.module('myApp.index', []);
angular.module('myApp.cv', []);
angular.module('myApp.blog', []);
angular.module('myApp.index', []);
angular.module('myApp.contact', []);


angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'myApp.index',
    'myApp.cv',
    'myApp.blog',
    'myApp.contact',
    'myApp.version'
])
    //.controller('MyAppCtrl', ['$scope', function ($scope, $angular, $route, $routeParams) {
        .controller('MyAppCtrl', function ($scope, $route, $routeParams, $location) {

        $scope.menuState = {
            index: {
                selected: true
            },
            cv: {
                selected: false,
                submenu: {
                    skills: false,
                    experience: false,
                    projects: false,
                    courses: false,
                    education: false,
                    other: false
                }
            },
            blog: {
                selected: false
            },
            contact: {
                selected: false
            }
        };

        $scope.selectMenuItem = function (menuKey, submenuKey) {

            // clear all states
            for (var property in $scope.menuState) {
                $scope.menuState[property].selected = false;
            }

            // set menu state
            $scope.menuState[menuKey].selected = true;


            if (angular.isDefined($scope.menuState[menuKey].submenu)) {

                for (var property in $scope.menuState[menuKey].submenu) {
                    $scope.menuState[menuKey].submenu[property] = false;
                }

                $scope.menuState[menuKey].submenu[submenuKey] = true;
            }

        };

        $scope.selectMenuItem($route.routes[$location.$$url].menu, $route.routes[$location.$$url].submenu);

    });