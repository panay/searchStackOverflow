(function() {

  angular.module('app')
    .directive('quickPanel', quickPanel);

  function quickPanel() {

    return {
      templateUrl: 'app/directives/quick-panel/quick-panel.html',
      restrict: 'AE'
    };
  }
})();