var searchApp = angular.module('searchApp');

searchApp.controller('SearchFormController', function($scope, $http, $location) {

    $scope.getResult = function(search, searchForm) {

        $scope.errorMessage = '';

        if(searchForm.$valid) {
            //send $post request to server and that return a resulted json file form stackoverflow api
            //if success than to invoke a $location.path('/search-result')

            $http.post('server', search)
                .success(function(result) {
                    $location.path('/search-result');
                })
                .error(function(data, status) {

                });
        }
    };
});