app.directive('mainHeader', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: appRoot + 'shared/directives/main-header/main-header.html'
  };
});
