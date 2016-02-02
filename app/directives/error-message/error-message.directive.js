(function () {

  angular.module('app')
    .directive('errorMessage', errorMessage);

  function errorMessage() {

    return {
      templateUrl: 'app/directives/error-message/error-message.html',
      restrict: 'AE',
      scope: {
        error: '='
      }
    };
  }
})();