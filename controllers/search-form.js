searchApp.controller('SearchFormCtrl', function ($scope, $http) {

  $scope.save = function (form) {

    var url = form.attributes["target"];
    console.log(url);

    $http
        .get(url, {question: $scope.question})
        .success(function () {
          console.log(response);
        });
  };
});