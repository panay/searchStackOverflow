var searchApp = angular.module('searchApp');

searchApp.controller('SearchResultController', function ($scope, $routeParams) {

  $scope.query = $routeParams.query;
  $scope.result = JSON.parse($routeParams.result);

});