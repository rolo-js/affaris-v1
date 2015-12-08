'use strict';

angular.module('affarisApp')
  .controller('UsersItemCtrl', ['$scope','$stateParams','$state',function($scope, $stateParams,$state){
          $scope.$on('userEdit', function() {
            $state.go( '.edit',$stateParams);
          });

  }]);
