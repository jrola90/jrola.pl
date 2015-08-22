myAppModule.service('educationCoursesModalService',
    function () {

        this.calcSemesterCount = function(model) {
            var count = 0;

            if (model && model.courses instanceof Array) {
                count = model.courses.length;
            }

            return count;
        };

    });