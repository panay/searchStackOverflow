var searchApp = angular.module('searchApp');

searchApp.controller('SearchFormController', function ($scope, $http, $location) {

  $scope.getResult = function (search, searchForm) {

    $scope.errorMessage = '';

    if (searchForm.$valid) {
      $http.get(
          'https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&title=' + search.input + '&site=stackoverflow'
      ).success(function (json) {
        $location.path('/search-result').search({'query': search.input, 'result': JSON.stringify(json.items)});
      });
    }
  };
});