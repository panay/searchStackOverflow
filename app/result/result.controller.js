(function () {

  angular.module('app')
    .controller('ResultController', ResultController);

  ResultController.$inject = ['dataservice', '$stateParams'];

  function ResultController(dataservice, $stateParams) {

    var vm = this;
    var body = angular.element(document.querySelector('body'));

    vm.query = $stateParams.query;
    vm.result = JSON.parse($stateParams.result);
    vm.showedPanel = false;
    vm.loading = false;

    vm.getQuestionsByAuthor = getQuestionsByAuthor;
    vm.getQuestionsByTag = getQuestionsByTag;
    vm.closePanel = closePanel;
    vm.closeMessage = closeErrorMessage;


    function getInfo(url) {

      vm.loading = true;

      return dataservice.getResultData(url)
        .then(complete)
        .catch(failed);

      function complete(data) {

        if (data.status && data.status !== 200) {
          failed(data);
        } else {
          body.addClass('show-panel');

          vm.loading = false;
          vm.showedPanel = true;
          vm.quickViewsResult = JSON.parse(data);
        }
      }

      function failed(error) {

        vm.loading = false;
        vm.error = error;
      }
    }

    function getQuestionsByAuthor(event, user_id) {

      event.preventDefault();

      getInfo(
        'https://api.stackexchange.com/2.2/users/' + user_id + '/questions?order=desc&sort=votes&site=stackoverflow'
      );
    }

    function getQuestionsByTag(event, tag) {

      event.preventDefault();

      getInfo(
        'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=' + tag + '&site=stackoverflow'
      );
    }

    function closePanel(event) {

      event.preventDefault();

      vm.showedPanel = false;
      body.removeClass('show-panel');
    }

    function closeErrorMessage(event) {

      event.preventDefault();

      vm.error = null;
    }
  }
})();
