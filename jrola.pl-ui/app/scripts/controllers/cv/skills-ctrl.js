myAppCvSkillsModule
    .controller('SkillsCtrl', function ($modal, $scope, dataService) {

        dataService.getCvSkills().success(function (res) {
            $scope.skills = res;
        });

        $scope.statuses = {
            programmingCard: true,
            databaseCard: false,
            othersCard: false
        };
    });