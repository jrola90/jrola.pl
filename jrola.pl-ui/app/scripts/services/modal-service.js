myAppModule.service('modalService',
    function ($modal) {

        // modal definitions
        // experience details modal
        this.openExperienceDetailsPopup = function (param) {
            $modal.open({
                templateUrl: 'scripts/modals/experience-details/experience-details.html',
                controller: 'ExperienceDetailsModalCtrl',
                resolve : {
                    param : function() {
                        return param;
                    }
                }
            });
        };

    });