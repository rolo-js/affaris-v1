'use strict';

angular.module('affarisApp')
  .controller('UsersSearchCtrl', ['$scope', 'User', '$state', '$timeout', 'uiGridConstants', '$filter',
    function($scope, User, $state, $timeout, uiGridConstants, $filter) {

      $scope.user = {} // for user selection

      $scope.phoneSelected = function(item) {
        $state.go('admin.users.detail.info', {
          id: item.id
        });
      }

      $scope.gridOptions = {
        rowHeight: 40,
        gridMenuShowHideColumns: false,
        enableColumnMenus: false,
        enableFiltering: true,
        columnDefs: [{
          field: 'email'
        }, {
          field: 'nick',
          width: 100
        }],
        enableRowSelection: true,
        enableRowHeaderSelection: false,
        multiSelect: false,
        onRegisterApi: function(gridApi) {
          $scope.gridApi = gridApi;
          $scope.panelOptions.gridApi = gridApi;
          gridApi.selection.on.rowSelectionChanged($scope, function(row, ev) {
            $scope.user.selected = row.entity;
            var switchTo = $state.current.name;
            if ($state.includes('admin.users.dash')){
              switchTo = "admin.users.detail.info"
            }
            $state.go(switchTo, {
              id:row.entity.id
            });
          });
        }
      }

      $scope.panelOptions = {
        title: 'Usuarios', // Se traduce en la vista
        hasFull: true,
        hasGrid: true,
        hasFilters: true,
        hasAdd: true,
        hasReports: true,
        hasDash: true,
        padding: true,
        primary: true,
        showDash: function() {
          $state.go('admin.users.dash');
          $scope.gridApi.selection.clearSelectedRows();
        },
        toggleFilters: function() {
          $scope.gridOptions.enableFiltering = !$scope.gridOptions.enableFiltering;
          $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
        }
      }

      $scope.panelOptionsPhone = {
        hasFull: true,
        hasAdd: true,
        hasReports: true,
        hasDash: true,
        padding: true,
        primary: true,
        stdHeight:false,
        showDash: function() {
          $state.go('admin.users.dash');
        }
      }


      $scope.editing=false;
      $scope.detailPanelOptions = {
        hasFull: true,
        hasGrid: false,
        hasFilters: false,
        hasAdd: true,
        hasReports: false,
        hasDash: false,
        padding: true,
        primary: false,
        stdHeight : true,
        onEdit: function() {
          $scope.$broadcast('userEdit');
        },
        onSave: function(){
          $scope.$broadcast('userSave');
        },
        onUndo: function(){
          $scope.$broadcast('userUndo')
        }
      }






      User.summary(function(data) {
        $scope.gridOptions.data = data;
        $scope.userlist = data;
        if ($state.params.id) {
          var entity = _.find(data, {
            id: $state.params.id
          });
          $scope.user.selected = entity;
          $timeout(function() {
            $scope.gridApi.selection.selectRow(entity);
          }, 50)
        }
      });
    }
  ]);
