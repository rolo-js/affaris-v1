'use strict';

describe('Directive: uiSrefActiveIf', function () {

  // load the directive's module
  beforeEach(module('affarisApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ui-sref-active-if></ui-sref-active-if>');
    element = $compile(element)(scope);
  }));
});
