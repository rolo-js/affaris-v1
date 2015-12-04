'use strict';

angular.module('affarisApp')
  .controller('MainCtrl', ["$scope", "$http", "socket","Auth", function ($scope, $http, socket,Auth) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });
    $scope.currentUser = Auth.getCurrentUser();
    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    //PANEL TEST
    $scope.panelOptions = {
      title : 'Información General',
      allowFullscreen : true,
      menuitems :[
        { name:'First' },{name:'Segundo'}
      ]
    };


  }]);
