'use strict';

angular.module('myApp.experience', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cv/experience', {
    templateUrl: 'views/cv/parts/experience/experience.html',
    controller: 'ExperienceCtrl'
  });
}])

.controller('ExperienceCtrl', [function() {

}]);