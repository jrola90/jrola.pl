myAppCvOthersModule

    .controller('OtherCtrl', function ($scope, dataService) {

        dataService.getCvOther().success(function (res) {
            $scope.text = res.text;
        });

    });