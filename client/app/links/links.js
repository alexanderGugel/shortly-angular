angular.module('shortly.links', [])

.directive('shortendLink', function () {
  return {
    restrict: 'E',
    templateUrl: 'app/links/shortend-link.html'
  };
})

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = [];
  $scope.getLinks = function () {
    Links.getLinks().then(function (data) {
      $scope.data.links = data;
    });
  };
  $scope.getLinks();
});
