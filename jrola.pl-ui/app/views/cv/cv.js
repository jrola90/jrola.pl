'use strict';

angular.module('myApp.cv', ['ngRoute',
                            'myApp.courses',
                            'myApp.education',
                            'myApp.experience',
                            'myApp.other',
                            'myApp.projects',
                            'myApp.skills'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/cv/skills'});
    }])
    .controller('CvCtrl', ['$scope', function ($scope) {

        alert('tworzenie kontrollera');

        $scope.state2 = {
            skills : true,
            experience : false,
            projects : false,
            courses : false,
            education : false,
            other : false
        };

        $scope.selectMenuItem = function(key) {

            // clear all states
            for (var property in $scope.state2) {
                $scope.state2[property] = false;
            }

            // set state2
            $scope.state2[key] = true;

            //alert(key + "->" + $scope.state2[key]);

        };


    }]);