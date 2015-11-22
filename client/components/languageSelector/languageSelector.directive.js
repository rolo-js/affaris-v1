'use strict';

angular.module('affarisApp')
  .directive('languageSelector', function (LocaleService) {
    return {
      templateUrl: 'components/languageSelector/languageSelector.html',
      restrict: 'A',
      replace: true,
      controller: function ($scope) {
          $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
          $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
          $scope.visible = $scope.localesDisplayNames &&
          $scope.localesDisplayNames.length > 1;

          $scope.changeLanguage = function (locale) {
              LocaleService.setLocaleByDisplayName(locale);
                $scope.currentLocaleDisplayName = locale;
          };
      }
    };
  });
