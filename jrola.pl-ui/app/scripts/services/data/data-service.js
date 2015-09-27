myAppModule.service('dataService', function (configService) {

    this.dataServiceImpl = configService.configDataService();

    // 'index' card data services
    this.getIndexTitle = function () {
        return this.dataServiceImpl.getIndexTitle();
    };

    // 'cv' card data services
    // 'skills' subcard
    this.getCvSkills = function () {
        return this.dataServiceImpl.getCvSkills();
    };

    // 'experience' subcard
    this.getCvExperience = function() {
        return this.dataServiceImpl.getCvExperience();
    };

    // 'projects' subcard
    this.getCvProjects = function() {
        return this.dataServiceImpl.getCvProjects();
    };

    // 'courses' subcard
    this.getCvCourses = function() {
        return this.dataServiceImpl.getCvCourses();
    };

    // 'education' subcard
    this.getCvEducation = function() {
        return this.dataServiceImpl.getCvEducation();
    };

    // 'other' subcard
    this.getCvOther = function() {
        return this.dataServiceImpl.getCvOther();
    };

    // 'contact' card
    this.getContact = function () {
        return this.dataServiceImpl.getContact();
    };

});