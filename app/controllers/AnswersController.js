var searchApp = angular.module('searchApp');

searchApp.controller('AnswersController', function ($scope, $http, $routeParams) {

  var body = angular.element(document.querySelector('body'));

  $scope.loading = true;

  $http.get(
      'https://api.stackexchange.com/2.2/questions/' + $routeParams.answer_id + '?order=desc&sort=activity&site=stackoverflow&filter=!-*f(6rc.(Xr5'
  ).success(function (json) {

    $scope.loading = false;

    var question = json.items[0];

    $scope.question = {
      title: question.title,
      body: question.body,
      author: question.owner.display_name,
      answers: question.answers
    };

    body.removeClass('show-panel');
  }).error(function(json) {

    $scope.loading = false;
    $scope.errorMessage = json.error_message;
  });
});