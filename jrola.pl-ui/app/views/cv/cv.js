'use strict';


angular.module('myApp.courses', []);
angular.module('myApp.education', []);
angular.module('myApp.experience', []);
angular.module('myApp.other', []);
angular.module('myApp.projects', []);
angular.module('myApp.skills', []);

angular.module('myApp.cv', ['ngRoute',
                            'myApp.courses',
                            'myApp.education',
                            'myApp.experience',
                            'myApp.other',
                            'myApp.projects',
                            'myApp.skills'
]);