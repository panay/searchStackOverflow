var searchApp = angular.module('searchApp');

searchApp.controller('SearchFormController', function($scope, $http, $location) {

    $scope.getResult = function(search, searchForm) {

        $scope.errorMessage = '';

        if(searchForm.$valid) {
            $location.path('/search-result').search({'title': search.input, 'author': 'alibaba'});
            //$http.post('server', search)
            //    .success(function(result) {
            //
            //    })
            //    .error(function(data, status) {
            //
            //    });
        }
    };
});