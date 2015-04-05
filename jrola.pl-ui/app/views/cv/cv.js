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
    }]);