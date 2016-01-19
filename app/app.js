var searchApp = angular.module('searchApp', ['ngRoute', 'ngSanitize'])
    .config(function ($routeProvider) {

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