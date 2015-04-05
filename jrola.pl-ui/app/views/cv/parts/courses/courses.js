'use strict';

angular.module('myApp.courses', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cv/courses', {
    templateUrl: 'views/cv/parts/courses/courses.html',
    controller: 'CoursesCtrl'
  });
}])

.controller('CoursesCtrl', [function() {

}]);