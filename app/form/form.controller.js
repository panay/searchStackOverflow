(function () {

  angular.module('app')
    .controller('FormController', FormController);

  function FormController($http, $location) {

    var vm = this;

    vm.getResult = function (search, searchForm) {

      vm.loading = false;

      if (searchForm.$valid) {
        vm.loading = true;

        $http.get(
          'https://api.stackexchange.com/2.2/search/advanced?order=asc&sort=activity&title=' + search.input + '&site=stackoverflow'
        ).success(function (json) {

          $location.path('/search-result').search({'query': search.input, 'result': JSON.stringify(json.items)});
          vm.loading = false;
        }).error(function (json) {

          vm.errorMessage = json.error_message;
          vm.loading = false;
        });
      }
    }
  }
})();
