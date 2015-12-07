'use strict';

angular.module('affarisApp')
  .controller('UsersDetailCtrl', ['$scope', 'User', '$state', '$stateParams',
    function($scope, User, $state, $stateParams) {
      $scope.myId = $stateParams.id;

      $scope.panelOptions = {
        title: 'Usuarios', // Se traduce en la vista
        hasFull: false,
        hasGrid: false,
        hasFilters: false,
        hasAdd: true,
        hasReports: false,
        hasDash: false,
        padding: true,
        primary: false,
        onEdit: function() {
          $state.go('admin.users.edit', {
            id: $scope.myId
          });
        }
      }
      User.get({
        id: $scope.myId
      }, function(user) {
        $scope.user = user;
      });

    }
  ]);
