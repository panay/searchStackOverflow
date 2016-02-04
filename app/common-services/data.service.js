(function () {

  angular.module('app')
    .factory('dataservice', dataservice);

  function dataservice($http) {

    return {
      getResultData: getResultData
    };

    function getResultData(url) {

      return $http.get(url)
        .then(complete)
        .catch(failed);

      function complete(response) {

        return JSON.stringify(response.data.items);
      }

      function failed(response) {

        return {
          status: response.data.error_id,
          title: response.data.error_name,
          message: response.data.error_message
        };
      }
    }
  }
})();