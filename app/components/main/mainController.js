app.controller('mainController', function($scope, menuItemService, translationService) {
  $scope.list = [];

  $scope.init = function() {
    translationService.getTranslation($scope);

    menuItemService
      .getMenuItems()
      .then(function(list) {
        $scope.list = list;
      })
  };
});
