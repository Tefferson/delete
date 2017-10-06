app.directive('cardListItem', function(navigationService) {

  function navigateTo(url) {
    navigationService.goTo(url);
  };

  function link(scope, element) {

    element.css({
      //'background-color': scope.item.color
    });

    element.on('click', function() {
      navigateTo(scope.item.url);
    });
  }

  return {
    link: link,
    restrict: 'E',
    scope: {
      item: '=item'
    },
    templateUrl: appRoot + 'shared/directives/card-list-item/card-list-item.html'
  };
});
