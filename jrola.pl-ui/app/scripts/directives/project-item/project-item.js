myAppModule.directive('projectItem', function () {
    return {
        restrict: 'E',
        require: ['title'],
        scope: {
            title: '=title',
            logo: '=logo',
            desc: '=desc',
            images: '=images'
        },
        controller : function($scope, modalService) {

            $scope.showDetails = function() {
                var param = {};
                param.desc = $scope.desc;
                param.images = $scope.images;
                modalService.openProjectDetailsPopup(param);
            };
        },
        templateUrl: 'scripts/directives/project-item/template/project-item.html'
    }
});