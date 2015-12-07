'use strict';

angular.module('affarisApp')
  .controller('UsersInfoCtrl', function($scope, $stateParams) {

    $scope.editing = $scope.$parent.editing;
    $scope.$on('userEdit', function() {
      $scope.editing = true;
    });
    $scope.$on('userSave', function() {
      $scope.editing = false;
    });
    $scope.$on('userUndo', function() {
      $scope.editing = false;
    });


  });
