'use strict';

angular.module('affarisApp')
  .factory('userTempStore', function () {

    var userData ={};

    // Public API
    return {
      getUserData: function () {
        return userData;
      },
      setUserInfo: function(data){
        userData.info = data;
      },
      setUserProfiles: function(data){
        userData.profiles = data;
      },
      resetData : function(){
        userData = {}
      }
    };
  });
