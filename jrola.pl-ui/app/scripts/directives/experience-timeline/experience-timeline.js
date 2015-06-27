myAppModule.directive('experienceTimeline', function () {
    return {
        restrict: 'E',
        require: ['model', 'timelineLength'],
        scope: {
            model: '=model',
            timelineLength: '=timelineLength'
        },
        controller: function ($scope, experienceTimelineService) {

            if ($scope.model) {
                var length = $scope.model.length;
                if (length > 0) {
                    $scope.selectedIndex = $scope.model[0].id;
                    $scope.timeRanges = experienceTimelineService.calculateTimelineRangesFromDates($scope.model, $scope.timelineLength);
                }
            }

            $scope.selectItem = function (index) {
                $scope.selectedIndex = index;
            };
        },
        templateUrl: 'scripts/directives/experience-timeline/template/experience-timeline.html'
    }
});