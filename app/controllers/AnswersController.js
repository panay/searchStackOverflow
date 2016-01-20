var searchApp = angular.module('searchApp');

searchApp.controller('AnswersController', function ($scope, $http, $routeParams) {

  $http.get(
      'https://api.stackexchange.com/2.2/questions/' + $routeParams.answer_id + '/answers?order=desc&sort=activity&site=stackoverflow&filter=!b0OfNb3HQOAMVH'
  ).success(function (json) {

    $scope.answers = json.items;
  });
});