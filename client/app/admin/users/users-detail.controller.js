'use strict';

angular.module('affarisApp')
  .controller('UsersDetailCtrl', ['$scope', 'User', '$state', '$stateParams',
    function($scope, User, $state, $stateParams) {
      console.log($scope);
      $scope.myId = $state.params.id;
      $scope.$on('userEdit', function() {
        $scope.editing = true;
      });
      $scope.$on('userSave', function() {
        $scope.editing = false;
      });
      $scope.$on('userUndo', function() {
        $scope.editing = false;
      });
      User.get({
        id: $scope.myId
      }, function(user) {
        $scope.user = user;
      });

    }
  ]);
