app
  .directive("goTo", ['$location', function ($location) {
    return {
      link: function (scope, element, attributes) {
        element.on("click", () => {
          scope.$apply(() => {
            $location.path(attributes.goTo);
          });
        })
      }
    };
  }])
  .directive("goBack", ['$window', function ($window) {
    return {
      link: function (scope, element, attributes) {
        element.on("click", () => {
          $window.history.back();
        })
      }
    };
  }])
  .directive("redirectTo", ['$window', function ($window) {
    return {
      link: function (scope, element, attributes) {
        element.on("click", () => {
          $window.location.href = attributes.redirectTo;
        })
      }
    };
  }])
  .directive("backgroundSrc", ['$config', function ($config) {
    return {
      scope: {
        backgroundSrc: "=",
        size: "<"
      },
      link: function (scope, element, attributes) {
        var backgroundSrc = scope.backgroundSrc;
        for (var i = 0; i < element.length; i++) {
          if (backgroundSrc.startsWith("http://") || backgroundSrc.startsWith("https://")) {
            element[i].style.backgroundImage = 'url(' + backgroundSrc + '), url(' + require('../assets/images/no-photo.png') + ')';
          } else {
            if (backgroundSrc) {
              if (scope.size) {
                var ii = backgroundSrc.lastIndexOf('/');
                backgroundSrc = backgroundSrc.substr(0, ii + 1) + scope.size + backgroundSrc.substr(ii);
                element[i].style.backgroundImage = 'url(' + $config.apiUrl + backgroundSrc + '), url(' + require('../assets/images/no-photo.png') + ')';
              } else {
                element[i].style.backgroundImage = 'url(' + $config.apiUrl + backgroundSrc + ')';
              }
            } else {
              element[i].style.backgroundImage += 'url(' + require('../assets/images/no-photo.png') + ')';
            }
          }
        }
      }
    };
  }])
  .directive("imageSrc", ['$config', function ($config) {
    return {
      scope: {
        imageSrc: "=",
        size: "<"
      },
      link: function (scope, element, attributes) {
        for (var i = 0; i < element.length; i++) {
          var ee = element[i];
          ee.addEventListener('error', (e) => {
            ee.setAttribute('src', require('../assets/images/no-photo.png'));
          });
          if (typeof scope.imageSrc != 'undefined' && scope.imageSrc != null) {
            if (scope.imageSrc.startsWith("http://") || scope.imageSrc.startsWith("https://")) {
              ee.setAttribute('src', scope.imageSrc);
            } else {
              var imageSrc = scope.imageSrc;
              if (imageSrc && scope.size) {
                var ii = imageSrc.lastIndexOf('/');
                imageSrc = imageSrc.substr(0, ii + 1) + scope.size + imageSrc.substr(ii);
              }
              console.log($config.apiUrl + imageSrc);
              ee.setAttribute('src', $config.apiUrl + imageSrc);
            }
          } else {
            ee.setAttribute('src', require('../assets/images/no-photo.png'));
          }
        }
      }
    };
  }]);