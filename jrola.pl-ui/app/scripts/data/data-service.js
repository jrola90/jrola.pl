myAppModule.service('dataService', function (configService) {

    this.dataServiceImpl = configService.configDataService();

    this.sayHello = function () {
        return this.dataServiceImpl.sayHello();
    };
});