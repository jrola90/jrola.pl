'use strict';

angular.module('myApp.other', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cv/other', {
    templateUrl: 'views/cv/parts/other/other.html',
    controller: 'OtherCtrl'
  });
}])

.controller('OtherCtrl', [function() {

}]);