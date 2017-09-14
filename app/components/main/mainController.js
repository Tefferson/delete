app.controller('mainController', function($scope, menuItemService, navigationService) {
  $scope.list = [];

  $scope.navigateTo = function(url) {
    navigationService.goToTest();
  };

  $scope.init = function() {
    menuItemService
      .getMenuItems()
      .then(function(list) {
        $scope.list = list;
      })
  };
});
