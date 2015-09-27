myAppModule.directive('contactItem', function () {
    return {
        restrict: 'E',
        require: ['model'],
        scope: {
            model: '=model'
        },
        controller: function ($scope) {
            console.log($scope.model);
        },
        templateUrl: 'scripts/directives/contact-item/template/contact-item.html'
    }
});