'use strict';

angular.module('affarisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });
    $stateProvider
      .state('users', {
        abstract : true,
        url: '/users',
        templateUrl: 'app/admin/users/users.html',
        controller:'UsersSearchCtrl'
      });
    $stateProvider
      .state('users.dash', {
        url: '/dash',
        templateUrl: 'app/admin/users/users-dash.html',
        controller: 'UsersDashCtrl'
      });
    $stateProvider
      .state('users.list', {
        url: '/list',
        templateUrl: 'app/admin/users/users-list.html',
        controller: 'UsersListCtrl'
      });
    $stateProvider
      .state('users.detail', {
        url: '/detail/:id',
        templateUrl: 'app/admin/users/users-detail.html',
        controller: 'UsersDetailCtrl'
      });
  });
