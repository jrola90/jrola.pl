myAppModule.directive('skillsBox', function () {
    return {
        restrict: 'E',
        require: ['ngModel', 'statuses'],
        scope: {
            ngModel: '=',
            closeOthers: '@',
            statuses: '='
        },
        controller : function($scope, modalService) {
            $scope.showDetails = function(param) {
                modalService.openExperienceDetailsPopup(param);
            };
        },
        templateUrl: 'scripts/directives/skills-box/template/skills-box.html'
    }
});