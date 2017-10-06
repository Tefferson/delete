app.factory('menuItemService', function($q, colors, routes) {

  function getMenuItems() {
    var defer = $q.defer();
    var list = [{
        background: 'http://www.tudosobrefloripa.com.br/images/noticias/71200/pipa_pandorga_papagaio__grande.jpg',
        color: colors.green,
        text: 'Text text nono nono ellipsis circle triangle',
        title: 'Test',
        url: routes.test
      },
      {
        background: 'https://andreabertoncel.files.wordpress.com/2015/11/matrix.jpg',
        color: colors.green,
        text: 'Text text nono nono ellipsis circle triangle',
        title: 'Test',
        url: routes.test
      },
      {
        background: 'https://cdn.pixabay.com/photo/2016/07/04/18/16/sun-flower-1497092_960_720.jpg',
        color: colors.yellow,
        text: 'Text text nono nono ellipsis circle triangle',
        title: 'Test',
        url: routes.test
      },
      {
        background: 'http://cdn.zmescience.com/wp-content/uploads/2012/08/green-car.jpg',
        color: colors.green,
        text: 'Text text nono nono ellipsis circle triangle',
        title: 'Test',
        url: routes.test
      },
      {
        background: 'http://www.wax-oil-flavoring.com/wp-content/uploads/2016/06/Blueberry.jpg',
        color: colors.blue,
        text: 'Text text nono nono ellipsis circle triangle',
        title: 'Test',
        url: routes.test
      },
      {
        background: 'https://www.thesun.co.uk/wp-content/uploads/2017/02/nintchdbpict000304038366.jpg?strip=all&w=960',
        color: colors.red,
        text: 'Text text nono nono ellipsis circle triangle',
        title: 'Test',
        url: routes.test
      },
      {
        background: 'https://raw.githubusercontent.com/sschmid/Entitas-CSharp/master/Readme/Images/csharp.png',
        color: colors.green,
        text: 'Text text nono nono ellipsis circle triangle',
        title: 'Test',
        url: routes.test
      }
    ];

    defer.resolve(list);
    return defer.promise;
  }

  return {
    getMenuItems: getMenuItems
  };
});
