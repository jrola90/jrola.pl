myAppModule.service('experienceTimelineService',
    function (utilsService, config) {

        var DATE_FORMAT = config.prefs.DATE_FORMAT_YEAR_MONTHS;
        var TIMELINE_COLORS = ['#B0E0E6', '#87CEEB', '#00BFFF', '#4169E1', '#0000CD', '#000080'];

        var calculateTimelineLengths = function (data, timelineLength) {
            var ranges = [];

            if (data) {
                var length = data.length;

                var rangeSize = 0;

                if (length > 0 && data[length - 1].dateStart) {
                    var dateStart = moment(data[length - 1].dateStart, DATE_FORMAT).toDate();

                    var dateEnd = data[0].dateEnd;

                    if (!dateEnd) {
                        dateEnd = moment(utilsService.getCurrentDate(), DATE_FORMAT).toDate();
                    } else {
                        dateEnd = moment(dateEnd, DATE_FORMAT).toDate();
                    }

                    rangeSize = moment(dateEnd).diff(moment(dateStart), 'months', true);
                }

                if (rangeSize != 0) {
                    for (var i = 0; i < length; i++) {
                        var periodStart = data[i].dateStart;
                        var periodEnd = data[i].dateEnd;

                        var itemSize = 0;
                        if (periodStart) {
                            var dateStart = moment(periodStart, DATE_FORMAT).toDate();
                            var dateEnd;
                            if (!periodEnd) {
                                dateEnd = moment(utilsService.getCurrentDate(), DATE_FORMAT).toDate();
                            } else {
                                dateEnd = moment(periodEnd, DATE_FORMAT).toDate();
                            }
                            itemSize = parseInt(((moment(dateEnd).diff(moment(dateStart), 'months', true)) / rangeSize) * timelineLength);
                        }
                        ranges.push({id: data[i].id, height: itemSize});
                    }
                }
            }

            return ranges;
        };

        var calculateTimeLineColors = function (ranges) {
            if (ranges) {
                var length = ranges.length;
                for (var rangeIndex = 0, colorsIndex = 0; rangeIndex < length; rangeIndex++, colorsIndex++) {
                    if (colorsIndex == length)
                        colorsIndex = 0;
                    ranges[rangeIndex].color = TIMELINE_COLORS[colorsIndex];
                }
            }
            return ranges;
        };

        this.calculateTimelineRangesFromDates = function (data, timelineLength) {
            var ranges = calculateTimelineLengths(data, timelineLength);
            ranges = calculateTimeLineColors(ranges);
            return ranges;
        };



    });