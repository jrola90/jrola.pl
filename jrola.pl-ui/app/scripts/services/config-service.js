myAppModule.service('configService', function (config, mockedDataService, serverDataService) {

    this.configDataService = function () {

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