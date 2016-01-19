var searchApp = angular.module('searchApp');

searchApp.controller('SearchResultController', function($scope, $routeParams) {

  $scope.search = {
    'title': $routeParams.title,
    'author': $routeParams.author
  };
});