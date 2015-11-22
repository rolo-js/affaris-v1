'use strict';

describe('Directive: languageSelector', function () {

  // load the directive's module and view
  beforeEach(module('affarisApp'));
  beforeEach(module('components/languageSelector/languageSelector.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<language-selector></language-selector>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the languageSelector directive');
  }));
});