myAppIndexModule

    .controller('ExperienceDetailsModalCtrl', function ($scope, $modalInstance, param, uiGridConstants, experienceDetailsModalService) {

        $scope.param = param;

        $scope.gridOptions = {
            enableSorting: true,
            showGridFooter: true,
            columnDefs: [
                {field: 'company'},
                {field: 'periodStart'},
                {
                    field: 'periodEnd',
                    cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.periodEnd ? row.entity.periodEnd : "till now"}}</div>'
                },
                {
                    field: 'months',
                    cellTemplate: '<div class="ui-grid-cell-contents">{{grid.appScope.displayTotalExperience(row.entity.months)}}</div>'
                }
            ],
            gridFooterTemplate: '<div class="ui-grid-cell-contents text-align-right bold">Total Experience: {{grid.appScope.experienceSum}}</div>',
            data: $scope.param.experience
        };

        $scope.experienceSum = experienceDetailsModalService.calculateTotalExperienceInMonths($scope.gridOptions.data);

        $scope.displayTotalExperience = function(months) {
            return experienceDetailsModalService.displayTotalExperience(months);
        };

        $scope.close = function () {
            $modalInstance.dismiss('cancel');
        };

    });