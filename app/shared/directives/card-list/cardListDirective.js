app.directive('cardList', function() {
  return {
    restrict: 'E',
    scope: {
      list: '='
    },
    templateUrl: appRoot + 'shared/directives/card-list/card-list.html'
  };
});
