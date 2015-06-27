myAppModule.service('utilsService',
    function () {

        this.getCurrentDate = function () {
            var currentDate = new Date();
            var stringDate = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1);
            return stringDate;
        };

    });