'use strict';

angular.module('affarisApp')
  .controller('ServicesCtrl',["$scope","$http","uiGridConstants", function ($scope,$http,uiGridConstants) {


    $scope.svcGridOptions ={
      columnDefs:[
        {field:'name'},
        {field:'code',width:100}
      ],
      onRegisterApi:function(gridApi){
        $scope.gridApi = gridApi;
        $scope.panelOptions.gridApi = gridApi;
        gridApi.selection.on.rowSelectionChanged($scope,function(row){
            $scope.user.selected = row.entity;
            $state.go('admin.services.detail',{id:row.entity.id});
            });
      }
    }

    $scope.panelOptions={
      title: 'Servicios',
      hasFull : true,
      hasGrid : true,
      hasFilters : true,
      hasAdd : true,
      hasReports : true,
      hasDash : true,
      padding:true,
      gridApi : $scope.gridApi,
      showDash: function(){
        $state.go('admin.users.dash');
      },
      toggleFilters: function(){
          $scope.svcGridOptions.enableFiltering = !$scope.svcGridOptions.enableFiltering;
          $scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.COLUMN );
      }
    }

    $scope.panel2Options={
      title:'Dashboard',
      allowFullscreen:true,
      menuitems:[{name:'Uno'},{name:'dos'}]
    }

    $http.get('api/services')
      .success(function(res){
         $scope.svcGridOptions.data = res;
      });

  }]);
