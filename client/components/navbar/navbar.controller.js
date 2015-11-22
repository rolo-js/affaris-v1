'use strict';

angular.module('affarisApp')
  .controller('NavbarCtrl', ["$rootScope","$scope", "$location", "Auth" ,"$translate",function ($rootScope,$scope, $location, Auth,$translate) {

    $rootScope.$on('$translateChangeSuccess',function(){
      $translate(['Inicio','Proyectos']).then(function (trans) {
           $scope.menu = [{
             'title': trans.Inicio,
             'link': '/'
           },{
             'title': trans.Proyectos,
             'link': '/projects'
           }];

         });
    });

    $translate(['Inicio','Proyectos']).then(function (trans) {
         $scope.menu = [{
           'title': trans.Inicio,
           'link': '/'
         },{
           'title': trans.Proyectos,
           'link': '/projects'
         }];

       });


    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }]);
