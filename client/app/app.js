'use strict';

angular.module('affarisApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'pascalprecht.translate',// angular-translate
  'tmh.dynamicLocale',// angular-dynamic-locale
  'ui.grid',
  'ui.grid.autoResize',
  'ui.grid.selection',
  'ui.select' //angular-ui-select
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth, $state) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          event.preventDefault();
          //$location.path('/login');
          $state.go('login');
        }
      });
    });
  })

  .constant('LOCALES', {
      'locales': {
          'es-MX': 'Español',
          'en-US': 'English'
      },
      'preferredLocale': 'es_MX'
  })

  .config(function ($translateProvider,tmhDynamicLocaleProvider) {
    //$translateProvider.useSanitizeValueStrategy('sanitize'); // Se quito porque estaba escapando los acentos
    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider.useStaticFilesLoader({
       prefix: 'assets/locales/locale-',// path to translations files
       suffix: '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.preferredLanguage('es-MX');// is applied on first load
    $translateProvider.useLocalStorage();// saves selected language to localStorage
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');

  })

  ;
