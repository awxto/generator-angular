'use strict';

/**
 * @ngdoc overview
 * @name <%= scriptAppName %>
 * @description
 * # <%= scriptAppName %>
 *
 * Main module of the application.
 */
angular
  .module('<%= scriptAppName %>', [<%= angularModules %>
    ,
    'ui.gravatar',
    'angular-loading-bar',
    'ngtimeago'
  ])
  <% if (ngRoute) { %>
  .config(function ($routeProvider, $locationProvider, cfpLoadingBarProvider) {

    //base /
    $locationProvider.html5Mode(true);
    //loading bar
    cfpLoadingBarProvider.includeSpinner = false;


    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.hashPrefix('');
  })<% } %>;






    //gravatar configuration
      angular.module('ui.gravatar').config([
        'gravatarServiceProvider', function(gravatarServiceProvider) {
          gravatarServiceProvider.defaults = {
            size     : 100,
            'default': 'identicon'  // Mystery man as default for missing avatars
          };

          // Use https endpoint
          gravatarServiceProvider.secure = false;

          // Force protocol
          //gravatarServiceProvider.protocol = 'my-protocol';

          // Override URL generating function
          //gravatarServiceProvider.urlFunc = function(options) {
            // Code to generate custom URL
          //};
        }
      ]);
