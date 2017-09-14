app.factory('menuItemService', function($q, routes) {

  function getMenuItems() {
    var defer = $q.defer();
    var list = [{
      title: 'test',
      url: routes.test
    }];
    
    defer.resolve(list);
    return defer.promise;
  }

  return {
    getMenuItems: getMenuItems
  };
});
