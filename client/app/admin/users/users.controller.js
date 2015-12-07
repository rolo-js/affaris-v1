'use strict';

angular.module('affarisApp')
  .controller('UsersSearchCtrl', ['$scope', 'User', '$state', '$timeout', 'uiGridConstants', '$filter',
    function($scope, User, $state, $timeout, uiGridConstants, $filter) {

      $scope.user = {} // for user selection

      $scope.phoneSelected = function(item) {
        $state.go('admin.users.detail', {
          id: item.id
        });
      }

      $scope.gridOptions = {
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
          gridApi.selection.on.rowSelectionChanged($scope, function(row) {
            $scope.user.selected = row.entity;
            $state.go('admin.users.detail', {
              id: row.entity.id
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
        },
        toggleFilters: function() {
          $scope.gridOptions.enableFiltering = !$scope.gridOptions.enableFiltering;
          $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
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
