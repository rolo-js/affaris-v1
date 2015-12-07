'use strict';

angular.module('affarisApp')
  .controller('UsersSearchCtrl', ['$scope','User','$state',function ($scope,User,$state) {


    $scope.selectedUser = null;
    $scope.gridOptions ={
      gridMenuShowHideColumns:false,
      enableColumnMenus:false,
      enableFiltering:true,
      columnDefs:[
        {field:'email'},
        {field:'nick',width:100}
      ],
     enableRowSelection: true,
     enableRowHeaderSelection: false ,
     multiSelect:false,
     onRegisterApi: function(gridApi){
       $scope.gridApi = gridApi;
       $scope.panelOptions.gridApi = gridApi;
       gridApi.selection.on.rowSelectionChanged($scope,function(row){
        $scope.selectedUser=row.entity;
        $state.go('users.detail',{id:row.entity.id});
      });
     }
    }

    $scope.panelOptions ={
      title: 'Usuarios',
      hasFull : true,
      hasGrid : true,
      hasFilters : true,
      hasAdd : false,
      hasReports : true,
      hasDash : true,
      gridApi : $scope.gridApi
    }


    User.summary(function(data){
      $scope.gridOptions.data = data;
      $scope.userlist = data;
    });

  }]);
