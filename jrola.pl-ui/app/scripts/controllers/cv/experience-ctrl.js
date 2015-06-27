myAppCvExperienceModule

    .controller('ExperienceCtrl', function ($scope, dataService) {

        dataService.getCvExperience().success(function (res) {
            $scope.experience = res;
        });

    });