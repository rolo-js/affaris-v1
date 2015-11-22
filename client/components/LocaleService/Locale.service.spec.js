'use strict';

describe('Service: LocaleService', function () {

  // load the service's module
  beforeEach(module('affarisApp'));

  // instantiate service
  var LocaleService;
  beforeEach(inject(function (_LocaleService_) {
    LocaleService = _LocaleService_;
  }));

  it('should do something', function () {
    expect(!!LocaleService).toBe(true);
  });

});
