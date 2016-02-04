(function () {

  angular.module('app', ['ui.router', 'ngSanitize'])
    .config(configure);

  function configure($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('search');

    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'app/form/form.html',
        controller: 'FormController as form'
      })
      .state('result', {
        url: '/result?query&result',
        templateUrl: 'app/result/result.html',
        controller: 'ResultController as result'
      })
      .state('answers', {
        url: '/answers/:questionId',
        templateUrl: 'app/answers/answers.html',
        controller: 'AnswersController as answers'
      });
  }
})();