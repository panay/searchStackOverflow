var searchApp = angular.module('searchApp');

searchApp.controller('SearchFormController', function ($scope, $http, $location) {

  $scope.getResult = function (search, searchForm) {

    $scope.loading = false;

    if (searchForm.$valid) {
      $scope.loading = true;

      $http.get(
          'https://api.stackexchange.com/2.2/search/advanced?order=asc&sort=activity&title=' + search.input + '&site=stackoverflow'
      ).success(function (json) {

        $location.path('/search-result').search({'query': search.input, 'result': JSON.stringify(json.items)});
        $scope.loading = false;
      }).error(function (json) {

        $scope.errorMessage = json.error_message;
        $scope.loading = false;
      });
    }
  };
});