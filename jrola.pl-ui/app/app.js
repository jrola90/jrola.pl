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
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/index'});
    }])
    .controller('MyAppCtrl', ['$scope', function ($scope) {

        $scope.state = {
            index : true,
            cv : false,
            blog : false,
            contact : false
        };

        $scope.selectMenuItem = function(key) {

            // clear all states
            for (var property in $scope.state) {
                $scope.state[property] = false;
            }

            // set state2
            $scope.state[key] = true;
        };


    }]);