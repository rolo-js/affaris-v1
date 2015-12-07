'use strict';

angular.module('affarisApp')
  .controller('UsersDetailCtrl',['$scope','User','$state','$stateParams', function ($scope,User,$state, $stateParams) {
    $scope.myId = $stateParams.id;

    User.get({id:$scope.myId},function(user){
      $scope.user = user;
    });
    
  }]);
