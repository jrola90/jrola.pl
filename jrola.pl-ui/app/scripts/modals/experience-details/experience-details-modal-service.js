myAppModule.service('experienceDetailsModalService',
    function (config, utilsService) {

        var DATE_FORMAT = config.prefs.DATE_FORMAT_YEAR_MONTHS;

        var calculateMonthDiff = function (periodStart, periodEnd) {

            var diff = 0;

            if (periodStart) {

                var dateStart = moment(periodStart, DATE_FORMAT).toDate();
                var dateEnd;
                if (!periodEnd) {
                    dateEnd = moment(utilsService.getCurrentDate(), DATE_FORMAT).toDate();
                } else {
                    dateEnd = moment(periodEnd, DATE_FORMAT).toDate();
                }

                diff = moment(dateEnd).diff(moment(dateStart), 'months', true);
            }
            return diff;
        };

        this.calculateTotalExperienceInMonths = function (data) {

            var experienceSum = 0;

            if (angular.isDefined(data)) {
                angular.forEach(data, function (value, key) {
                    value.months = calculateMonthDiff(value.periodStart, value.periodEnd);
                    experienceSum += value.months;
                });
            }

            return this.displayTotalExperience(experienceSum);
        };

        this.displayTotalExperience = function (monthsCount) {
            var output;

            if (monthsCount) {
                if (monthsCount >= 12) {
                    var years = parseInt(monthsCount / 12);
                    var months = monthsCount % 12;
                    output = years + " year(s), " + months + " month(s)";
                } else {
                    output = monthsCount + " month(s)"
                }
            }

            return output;
        };
    });