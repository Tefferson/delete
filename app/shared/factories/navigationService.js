app.factory('navigationService', function($location, routes) {

  function goTo(url) {
    $location.path(url);
  }

  function goToMain() {
    goTo(routes.main);
  }

  function goToTest() {
    goTo(routes.test);
  }

  return {
    goToMain: goToMain,
    goToTest: goToTest
  };
});
