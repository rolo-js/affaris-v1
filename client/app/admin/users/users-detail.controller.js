'use strict';

angular.module('affarisApp')
  .controller('UsersDetailCtrl', function ($scope,User) {
    $scope.panelOptions ={
      title: 'Usuarios'
    }

    $scope.gridOptions ={
      columnDefs:[
        {field:'email'},
        {field:'nick',width:100}
      ]
    }
    $scope.gridOptions.data = User.query();
  });
