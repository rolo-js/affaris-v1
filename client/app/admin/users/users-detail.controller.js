'use strict';

angular.module('affarisApp')
  .controller('UsersDetailCtrl', ['$scope', 'User', '$state', '$stateParams',
    function($scope, User, $state, $stateParams) {

      $scope.user = _.find($scope.userlist,{ id: $stateParams.id});
      


      // console.log('inmaster')
      // $scope.master = {};
      // $scope.myId = $state.params.id;
      // $scope.$on('userEdit', function() {
      //   $scope.editing = true;
      // });
      // $scope.$on('userSave', function() {
      //   $scope.editing = false;
      // });
      //
      // var resetUser = function(){
      //   angular.copy($scope.master, $scope.user);
      // }
      //
      // $scope.$on('userUndo', function() {
      //   $scope.editing = false;
      //   resetUser();
      // });
      //
      // User.get({
      //   id: $scope.myId
      // }, function(user) {
      //   $scope.user = user;
      // });

    }
  ]);
