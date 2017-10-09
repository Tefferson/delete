app.service('navigationService', function($location, routes) {

  function goTo(url) {
    $location.path(url);
  }

  function goToMain() {
    goTo(routes.main);
  }

  function goToTest() {
    goTo(routes.test);
  }

  this.goToMain = goToMain;
  this.goToTest = goToTest;
  this.goTo = goTo;
});
