myAppIndexModule

    .controller('IndexCtrl', function ($scope, dataService) {
        $scope.indexTitle = dataService.getIndexTitle();
    });