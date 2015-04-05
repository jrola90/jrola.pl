'use strict';

angular.module('myApp.education', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cv/education', {
    templateUrl: 'views/cv/parts/education/education.html',
    controller: 'EducationCtrl'
  });
}])

.controller('EducationCtrl', [function() {

}]);