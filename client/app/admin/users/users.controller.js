'use strict';

angular.module('affarisApp')
  .controller('UsersSearchCtrl', function ($scope,User) {
    $scope.panelOptions ={
      title: 'Usuarios',
      allowFullscreen:true
    }

    $scope.gridOptions ={
      columnDefs:[
        {field:'email'},
        {field:'nick',width:100}
      ]

    }
    User.summary(function(data){
      $scope.gridOptions.data = data;
    });

  });
