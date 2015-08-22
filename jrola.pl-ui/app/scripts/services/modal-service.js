myAppModule.service('modalService',
    function ($modal) {

        // modal definitions
        // experience details modal
        this.openExperienceDetailsPopup = function (param) {
            $modal.open({
                templateUrl: 'scripts/modals/experience-details/experience-details.html',
                controller: 'ExperienceDetailsModalCtrl',
                resolve: {
                    param: function () {
                        return param;
                    }
                }
            });
        };

        // project details modal
        this.openProjectDetailsPopup = function (param) {
            $modal.open({
                templateUrl: 'scripts/modals/project-details/project-details.html',
                controller: 'ProjectDetailsModalCtrl',
                windowClass: 'cv-projects-modal',
                resolve: {
                    param: function () {
                        return param;
                    }
                }
            });
        };

        this.openEducationCoursesPopup = function (param) {
            $modal.open({
                templateUrl: 'scripts/modals/education-courses/education-courses.html',
                controller: 'EducationCoursesModalCtrl',
                resolve: {
                    param: function () {
                        return param;
                    }
                }
            });
        };

    });