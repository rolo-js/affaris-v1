'use strict';

describe('Directive: widgetGrid', function () {

  // load the directive's module
  beforeEach(module('testsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<widget-grid></widget-grid>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the widgetGrid directive');
  }));
});