myAppModule.service('mockedDataService', function ($http) {

    this.jsonPath = "data/mocked/services/";

    // 'index' card data services
    this.getIndexTitle = function () {
        return "Jarosław Rola - software developer - Portfolio.";
    };

    // 'cv' card data services
    // 'skills' subcard
    this.getCvSkills = function () {
        return $http.get(this.jsonPath + "cv/skills.json");
    };

    // 'experience' subcard
    this.getCvExperience = function() {
        return $http.get(this.jsonPath + "cv/experience.json");
    }

    // 'projects' subcard
    this.getCvProjects = function() {
        return $http.get(this.jsonPath + "cv/projects.json");
    };

    // 'courses' subcard
    this.getCvCourses = function() {
        return $http.get(this.jsonPath + "cv/courses.json");
    };

    // 'education' subcard
    this.getCvEducation = function() {
        return $http.get(this.jsonPath + "cv/education.json");
    };

    // 'other' subcard
    this.getCvOther = function() {
        return $http.get(this.jsonPath + "cv/other.json");
    };

    // 'contact' card
    this.getContact = function() {
        return $http.get(this.jsonPath + "contact/contact.json");
    }

});