myAppIndexModule

    .controller('ProjectDetailsModalCtrl', function ($scope, $modalInstance, param, uiGridConstants, projectDetailsModalService) {

        $scope.slides = [];

        $scope.sliders = projectDetailsModalService.addImages();

        if (param) {
            $scope.slides = projectDetailsModalService.addImages(param.images);
        }

        $scope.desc = param.desc;

        $scope.close = function () {
            $modalInstance.dismiss('cancel');
        };

    });