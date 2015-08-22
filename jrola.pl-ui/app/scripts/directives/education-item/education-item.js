myAppModule.directive('educationItem', function (modalService) {
    return {
        restrict: 'E',
        require: ['model'],
        scope: {
            model: '=model'
        },
        controller: function ($scope) {

            $scope.openCoursesPopup = function(semester) {
                var param = {
                    semester : semester,
                    model : $scope.model
                };
                modalService.openEducationCoursesPopup(param);
            };
        },
        templateUrl: 'scripts/directives/education-item/template/education-item.html'
    }
});