(function () {

    myAppIndexModule = angular.module('myApp.index', []);

    myAppCvCoursesModule = angular.module('myApp.cv.courses', []);
    myAppCvEducationModule = angular.module('myApp.cv.education', []);
    myAppCvExperienceModule = angular.module('myApp.cv.experience', []);
    myAppCvProjectsModule = angular.module('myApp.cv.projects', []);
    myAppCvSkillsModule = angular.module('myApp.cv.skills', []);
    myAppCvOthersModule = angular.module('myApp.cv.other', []);

    myAppCvModule = angular.module('myApp.cv', [
        'myApp.cv.courses',
        'myApp.cv.education',
        'myApp.cv.experience',
        'myApp.cv.other',
        'myApp.cv.projects',
        'myApp.cv.skills'
    ]);

    myAppBlogModule = angular.module('myApp.blog', []);

    myAppContactModule = angular.module('myApp.contact', []);

    myAppConfigModule = angular.module('myApp.config', []);

    myAppModule = angular.module('myApp', [
        'ngRoute',
        'ui.bootstrap',
        'ui.grid',
        'myApp.index',
        'myApp.cv',
        'myApp.blog',
        'myApp.contact',
        'myApp.version',
        'myApp.config'
    ]);
})();