myAppModule.directive('coursesTable', function () {
    return {
        restrict: 'E',
        require: ['model'],
        scope: {
            model: '=model'
        },
        controller: function ($scope) {

            if ($scope.model) {
                var length = $scope.model.length;
                if (length > 0) {
                    $scope.selectedIndex = $scope.model[0].id;
                    $scope.details = $scope.model[0].details;
                    $scope.date = $scope.model[0].date;
                }
            }

            $scope.selectItem = function (index) {
                $scope.selectedIndex = index;
                var length = $scope.model.length;
                for (var i = 0; i < length; i++) {
                    if ($scope.model[i].id === index) {
                        $scope.details = $scope.model[i].details;
                        $scope.date = $scope.model[i].date;
                    }
                }
            };

        },
        templateUrl: 'scripts/directives/courses-table/template/courses-table.html'
    }
});