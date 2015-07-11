myAppCvProjectsModule

    .controller('ProjectsCtrl', function ($scope, dataService) {

        dataService.getCvProjects().success(function (res) {
            $scope.projects = res;
        });
    });