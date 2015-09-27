myAppContactModule

    .controller('ContactCtrl', function ($scope, dataService) {

        dataService.getContact().success(function (res) {

            if (res) {
                $scope.text = res.desc;
                $scope.contacts = res.list;
            }
        });

    });