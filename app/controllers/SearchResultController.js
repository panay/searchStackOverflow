//var searchApp = angular.module('searchApp');
//
//searchApp.controller('SearchResultController', function ($scope, $http, $routeParams) {
//
//  $scope.query = $routeParams.query;
//  $scope.result = JSON.parse($routeParams.result);
//  $scope.showedPanel = false;
//  $scope.loading = false;
//
//  var body = angular.element(document.querySelector('body'));
//
//  var getInfo = function(url) {
//
//    $scope.loading = true;
//
//    $http.get(url).success(function(json) {
//
//      body.addClass('show-panel');
//
//      $scope.loading = false;
//      $scope.showedPanel = true;
//      $scope.quickViewsResult = json.items;
//    }).error(function(json) {
//
//      $scope.loading = false;
//      $scope.errorMessage = json.error_message;
//    });
//  };
//
//  $scope.getQuestionsByAuthor = function(e, user_id) {
//
//    e.preventDefault();
//
//    getInfo(
//        'https://api.stackexchange.com/2.2/users/' + user_id + '/questions?order=desc&sort=votes&site=stackoverflow'
//    );
//  };
//
//  $scope.getQuestionsByTag = function(e, tag) {
//
//    e.preventDefault();
//
//    getInfo(
//        'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=' + tag + '&site=stackoverflow'
//    );
//  };
//
//  $scope.closePanel = function(e) {
//
//    e.preventDefault();
//
//    $scope.showedPanel = false;
//    body.removeClass('show-panel');
//  };
//
//  $scope.closeMessage = function(e) {
//
//    e.preventDefault();
//
//    $scope.errorMessage = null;
//  }
//});