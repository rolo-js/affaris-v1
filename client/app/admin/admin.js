'use strict';

angular.module('affarisApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        template: '<ui-view />',
        abstract: true
      })

      .state('admin.users', {
        abstract: true,
        url: '/users',
        templateUrl: 'app/admin/users/users.html',
        controller: 'UsersSearchCtrl',
        resolve:{
          usersSummary: ['User',function(User){
          return User.summary();
          }]
        }
      })
      .state('admin.users.dash', {
        url: '',
        templateUrl: 'app/admin/users/users-dash.html',
        controller: 'UsersDashCtrl'
      })
      .state('admin.users.detail', {
        //abstract:true,
        url: '/detail/{id}',
        templateUrl: 'app/admin/users/users-detail.html',
        controller: 'UsersDetailCtrl'
      })
      .state('admin.users.detail.item', {
        url: '/item/{itemid}',
        templateUrl: function(params){ return 'app/admin/users/users-'+ params.itemid +'.html'},
        controller: 'UsersItemCtrl'
      })
      .state('admin.users.detail.item.edit',{
        views:{
          '@admin.users.detail':{
            templateUrl:function(params){ return 'app/admin/users/users-'+ params.itemid +'.html'},
            controller:'UsersEditCtrl'
          }
        }
      })
    // $stateProvider
    //   .state('admin.users.detail.profiles', {
    //     url: '/profiles',
    //     templateUrl: 'app/admin/users/users-profiles.html',
    //     controller: 'UsersProfilesCtrl'
    //   });

  });
