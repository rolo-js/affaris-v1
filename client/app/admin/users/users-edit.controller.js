'use strict';

angular.module('affarisApp')
  .controller('UsersEditCtrl',['$scope','$state','$stateParams','$rootScope',function($scope,$state,$stateParams,$rootScope){
    $scope.editing = true;
    $scope.$on('userUndo', function() {
      $state.go( '^',$stateParams);
    });
        $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
        })

  }]);
