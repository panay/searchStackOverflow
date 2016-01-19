var searchApp = angular.module('searchApp', ['ngRoute', 'ngSanitize'])
    .config(function ($routeProvider, $httpProvider) {

      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];

      $routeProvider.when('/search', {
        templateUrl: './app/views/searchForm.html',
        controller: 'SearchFormController'
      });

      $routeProvider.when('/search-result', {
        templateUrl: './app/views/searchResult.html',
        controller: 'SearchResultController'
      });

      $routeProvider.when('/answers/:answer_id', {
        templateUrl: './app/views/answers.html',
        controller: 'AnswersController'
      });

      $routeProvider.otherwise({
        redirectTo: '/search'
      });
    });