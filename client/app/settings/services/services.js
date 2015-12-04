'use strict';

angular.module('affarisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('services', {
        url: '/services',
        templateUrl: 'app/settings/services/services.html',
        controller: 'ServicesCtrl'
      });
  });
