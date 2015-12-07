'use strict';

angular.module('affarisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        template: '<ui-view />',
        abstract:true
      });
    $stateProvider
      .state('admin.users', {
        abstract : true,
        url: '/users',
        templateUrl: 'app/admin/users/users.html',
        controller:'UsersSearchCtrl'
      });
    $stateProvider
      .state('admin.users.dash', {
        url: '/dash',
        templateUrl: 'app/admin/users/users-dash.html',
        controller: 'UsersDashCtrl'
      });
    $stateProvider
      .state('admin.users.list', {
        url: '/list',
        templateUrl: 'app/admin/users/users-list.html',
        controller: 'UsersListCtrl'
      });
    $stateProvider
      .state('admin.users.detail', {
        url: '/detail/{id}',
        templateUrl: 'app/admin/users/users-detail.html',
        controller: 'UsersDetailCtrl'
      });
    $stateProvider
      .state('admin.users.edit', {
        url: '/edit/{id}',
        templateUrl: 'app/admin/users/users-edit.html',
        controller: 'UsersEditCtrl'
      });  });
