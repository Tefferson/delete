app.controller('mainController', function($scope, menuItemService) {
  $scope.list = [];

  $scope.init = function() {
    menuItemService
      .getMenuItems()
      .then(function(list) {
        $scope.list = list;
      })
  };
});
