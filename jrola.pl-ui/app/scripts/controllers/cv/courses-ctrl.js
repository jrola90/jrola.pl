myAppCvCoursesModule.controller('CoursesCtrl', function ($scope,dataService) {

    dataService.getCvCourses().success(function (res) {
        $scope.courses = res;
    });

});