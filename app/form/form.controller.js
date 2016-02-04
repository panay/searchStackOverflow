(function () {

  angular.module('app')
    .controller('FormController', FormController);

  FormController.$inject = ['dataservice', '$location'];

  function FormController(dataservice, $location) {

    var vm = this;

    vm.getResult = getResult;
    vm.loading = false;
    vm.error = {};

    function getResult(search, searchForm) {

      if (searchForm.$valid) {
        vm.loading = true;

       return dataservice.getResultData(
          'https://api.stackexchange.com/2.2/search/advanced?order=asc&sort=activity&title=' + search.input + '&site=stackoverflow'
        ).then(complete)
          .catch(failed);
      }

      function complete(data) {
        if(data.status && data.status !== 200) {
          failed(data);
        } else {
          $location.path('/result').search({'query': search.input, 'result': data});
          vm.loading = false;
        }
      }

      function failed(error) {
        vm.error = error;
        vm.loading = false;
      }
    }
  }
})();
