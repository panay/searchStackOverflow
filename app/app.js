var searchApp = angular.module('searchApp', ['ngRoute'])
    .config(function($routeProvider) {

        $routeProvider.when('/search-result', {
            templateUrl: './views/searchResult.html',
            controller: 'SearchResultController'
        });

        $routeProvider.when('/answers', {
            templateUrl: './views/answers.html',
            controller: 'AnswersController'
        });
    });