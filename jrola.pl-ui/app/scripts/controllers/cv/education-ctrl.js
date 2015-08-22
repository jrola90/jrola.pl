'use strict';

myAppCvEducationModule

    .controller('EducationCtrl', function ($scope, dataService) {

        dataService.getCvEducation().success(function (res) {
            $scope.education = res;
        });

    });