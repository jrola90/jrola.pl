myAppModule
    .controller('MyAppCtrl', function ($scope, $route, $routeParams, $location) {

        $scope.menuState = {
            index: {
                selected: true
            },
            cv: {
                selected: false,
                submenu: {
                    skills: false,
                    experience: false,
                    projects: false,
                    courses: false,
                    education: false,
                    other: false
                }
            },
            blog: {
                selected: false
            },
            contact: {
                selected: false
            }
        };

        $scope.selectMenuItem = function (menuKey, submenuKey) {

            // clear all states
            for (var property in $scope.menuState) {
                $scope.menuState[property].selected = false;
            }

            // set menu state
            $scope.menuState[menuKey].selected = true;


            if (angular.isDefined($scope.menuState[menuKey].submenu)) {

                for (var property in $scope.menuState[menuKey].submenu) {
                    $scope.menuState[menuKey].submenu[property] = false;
                }

                $scope.menuState[menuKey].submenu[submenuKey] = true;
            }

        };

        if (angular.isDefined($route.routes[$location.$$url]))
            $scope.selectMenuItem($route.routes[$location.$$url].menu, $route.routes[$location.$$url].submenu);

    });