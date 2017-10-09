app.service('menuItemService', function($q, colors, routes) {

  function getMenuItems() {
    var defer = $q.defer();
    var list = [{
        background: appRoot + '../assets/img/hangman.png',
        color: colors.green,
        text: 'Text text nono nono ellipsis circle triangle',
        title: 'Test',
        url: routes.test
      },
      {
        background: appRoot + '../assets/img/hangman.png',
        color: colors.green,
        text: 'Text text nono nono ellipsis circle triangle',
        title: 'Test',
        url: routes.test
      },
      {
        background: appRoot + '../assets/img/hangman.png',
        color: colors.yellow,
        text: 'Text text nono nono ellipsis circle triangle',
        title: 'Test',
        url: routes.test
      },
      {
        background: appRoot + '../assets/img/hangman.png',
        color: colors.green,
        text: 'Text text nono nono ellipsis circle triangle',
        title: 'Test',
        url: routes.test
      },
      {
        background: appRoot + '../assets/img/hangman.png',
        color: colors.blue,
        text: 'Text text nono nono ellipsis circle triangle',
        title: 'Test',
        url: routes.test
      }
    ];

    defer.resolve(list);
    return defer.promise;
  }

  this.getMenuItems = getMenuItems;
});
