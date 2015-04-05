'use strict';

angular.module('myApp.skills', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cv/skills', {
    templateUrl: 'views/cv/parts/skills/skills.html',
    controller: 'SkillsCtrl'
  });
}])

.controller('SkillsCtrl', [function() {

}]);