angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.loading = false;
  $scope.link = {};

  $scope.addLink = function () {
    $scope.loading = true;
    Links.addLink($scope.link).then(function(){
      console.log($scope.url);
      $scope.loading = false;
    }).catch(function (error) {
      $scope.loading = false;
      $scope.message =  "Invalid URL. Please try another.";
    });
  };
});
