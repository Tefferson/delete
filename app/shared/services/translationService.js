app.service('translationService', function($http) {

  function getTranslation($scope) {

    var language = navigator.language.toLowerCase();

    if (sessionStorage) {

      var ssid = 'translation_cache_' + language.toLowerCase();

      if (sessionStorage.getItem(ssid)) {
        $scope.translation = JSON.parse(sessionStorage.getItem(ssid));
      } else {
        _getTranslation()
          .then(function() {
            sessionStorage.setItem(ssid, JSON.stringify($scope.translation));
          });
      };

    } else {
      _getTranslation();
    }

    function _getTranslation() {
      var languageFilePath = '../assets/translations/translation_' + language.toLowerCase() + '.json';
      return $http
        .get(languageFilePath)
        .then(function(translation) {
          $scope.translation = translation.data;
        });
    }
  };

  this.getTranslation = getTranslation;
});
