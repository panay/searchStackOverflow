(function () {

  angular.module('app')
    .controller('AnswersController', AnswersController);

  AnswersController.$inject = ['dataservice', '$stateParams'];

  function AnswersController(dataservice, $stateParams) {

    var vm = this;
    var body = angular.element(document.querySelector('body'));

    vm.loading = true;

    activate();

    function activate() {

      return dataservice.getResultData(
        'https://api.stackexchange.com/2.2/questions/' + $stateParams.questionId + '?order=desc&sort=activity&site=stackoverflow&filter=!-*f(6rc.(Xr5'
      ).then(complete)
        .catch(failed);

      function complete(data) {

        if (data.status && data.status !== 200) {
          failed(data);
        } else {
          vm.loading = false;

          var question = JSON.parse(data)[0];

          vm.question = {
            title: question.title,
            body: question.body,
            author: question.owner.display_name,
            answers: question.answers
          };

          body.removeClass('show-panel')
        }
      }

      function failed(error) {

        vm.loading = false;
        vm.error = error;
      }
    }
  }
})();
