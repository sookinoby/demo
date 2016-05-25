(function() {
  'use strict';

  angular
    .module('tutorial2')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('tutorial', {
        url: '/',
        templateUrl: 'app/tutorial/tutorial.html',
        controller: 'TutorialController',
        controllerAs: 'tut'
      })
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
