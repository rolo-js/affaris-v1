'use strict';

angular.module('affarisApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        template: '<ui-view />',
        abstract: true
      });
    $stateProvider
      .state('admin.users', {
        abstract: true,
        url: '/users',
        templateUrl: 'app/admin/users/users.html',
        controller: 'UsersSearchCtrl'
      });
    $stateProvider
      .state('admin.users.dash', {
        url: '',
        templateUrl: 'app/admin/users/users-dash.html',
        controller: 'UsersDashCtrl'
      });
    $stateProvider
      .state('admin.users.detail', {
        abstract:true,
        url: '/detail/{id}',
        templateUrl: 'app/admin/users/users-detail.html',
        controller: 'UsersDetailCtrl'
      });
    $stateProvider
      .state('admin.users.detail.info', {
        url: '',
        templateUrl: 'app/admin/users/users-info.html',
        controller: 'UsersInfoCtrl',
        params:{
          currentUser:null
        }
      });
    $stateProvider
      .state('admin.users.detail.profiles', {
        url: '/profiles',
        templateUrl: 'app/admin/users/users-profiles.html',
        controller: 'UsersProfilesCtrl'
      });

  });
