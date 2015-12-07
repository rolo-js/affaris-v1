'use strict';

angular.module('affarisApp')
  .controller('UsersEditCtrl', ['$scope', 'User', '$state', '$stateParams',
    function($scope, User, $state, $stateParams) {
      $scope.myId = $stateParams.id;

      $scope.panelOptions = {
        hasFull: false,
        hasGrid: false,
        hasFilters: false,
        hasAdd: true,
        hasReports: false,
        hasDash: false,
        padding: true,
        primary: false,

      }
      User.get({
        id: $scope.myId
      }, function(user) {
        $scope.user = user;
      });

    }
  ]);
