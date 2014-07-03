angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.loading = false;
  $scope.link = {};

  $scope.addLink = function () {
    $scope.loading = true;
    Links.addLink($scope.link).then(function(){
      $scope.loading = false;
      $scope.link.url = undefined;
    }).catch(function (error) {
      $scope.loading = false;
      $scope.message =  "Invalid URL. Please try another.";
    });
  };
});
