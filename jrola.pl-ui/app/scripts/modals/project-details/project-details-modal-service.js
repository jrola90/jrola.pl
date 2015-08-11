myAppModule.service('projectDetailsModalService',
    function () {

        var IMAGES_PATH = 'images/projects/';

        this.addImages = function(images) {
            var slides = [];
            if (images) {
                var length = images.length;
                for (var i = 0; i < length; i++) {
                    slides.push({
                        image: IMAGES_PATH + images[i]
                    });
                }
            }
            return slides;

        };

    });