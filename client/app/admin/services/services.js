'use strict';

angular.module('affarisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.services', {
        url: '/services',
        templateUrl: 'app/admin/services/services.html',
        controller: 'ServicesCtrl'
      });
  });
