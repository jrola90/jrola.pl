'use strict';

describe('myApp.blog module', function() {

  beforeEach(module('myApp.blog'));

  describe('blog controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('BlogCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});