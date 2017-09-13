app.config(function($routeProvider) {
  $routeProvider
    .when('/test', {
      templateUrl: 'app/components/test/test.html',
      controller: 'testController'
    })
    .when('/main', {
      templateUrl: 'app/components/main/main.html',
      controller: 'mainController'
    })
    .otherwise({ redirectTo: '/main' });
});
