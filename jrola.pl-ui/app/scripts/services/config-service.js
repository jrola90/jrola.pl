angular.module('myApp').service('configService', function (mockedDataService, serverDataService) {

    this.configDataService = function () {

        var config  = {
            mocked : true
        };
        var service = null;

        if (config.mocked === true)
            service = mockedDataService;
        else if (config.mocked === false)
            service = serverDataService;
        else {
            service = mockedDataService;
        }

        return service;
    };

});