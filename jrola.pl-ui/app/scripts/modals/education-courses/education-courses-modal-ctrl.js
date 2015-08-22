myAppIndexModule

    .controller('EducationCoursesModalCtrl', function ($scope, $modalInstance, param, educationCoursesModalService) {

        $scope.param = param;

        $scope.maxSize = 10;
        $scope.totalItems = educationCoursesModalService.calcSemesterCount($scope.param.model);
        $scope.currentPage = $scope.param.semester ? $scope.param.semester : 1;

        $scope.gridOptions = {
            enableSorting: true,
            columnDefs: [
                {field: 'name'}
            ],
            data: $scope.param.model.courses[$scope.currentPage - 1]
        };

        $scope.pageChanged = function() {
            $scope.gridOptions.data = $scope.param.model.courses[$scope.currentPage - 1];
        };

        $scope.close = function () {
            $modalInstance.dismiss('cancel');
        };

    });