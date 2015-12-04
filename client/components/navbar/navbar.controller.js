'use strict';

angular.module('affarisApp')
  .controller('NavbarCtrl',
  ["$rootScope",
  "$scope",
  "$location",
  "Auth" ,
  "$translate",

  function ($rootScope,
            $scope,
            $location,
            Auth,
            $translate) {
    $scope.menu=[];
    function setStrings() {
      $translate(['Inicio','Servicios']).then(function (trans) {
           $scope.menu = [{
             'title': trans.Inicio,
             'link': '/'
           },{
             'title': trans.Servicios,
             'link': '/services'
           }];

         });
    }
    $rootScope.$on('$translateChangeSuccess',function(){
      setStrings() ;
    });

    setStrings() ;

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
