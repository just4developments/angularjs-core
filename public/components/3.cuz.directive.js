app.directive("compareTo", function () {
  return {
    require: "ngModel",
    scope: {
      otherModelValue: "=compareTo"
    },
    link: function (scope, element, attributes, ngModel) {
      ngModel.cuzmes = '';
      ngModel.$validators.compareTo = function (modelValue) {
        ngModel.cuzmes = '';
        if (modelValue != scope.otherModelValue.$modelValue) {
          ngModel.cuzmes = 'Password miss match';
          return false;
        }
        return true;
      };

      scope.$watch("otherModelValue", function () {
        ngModel.$validate();
      });
    }
  };
})
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
              ee.setAttribute('src', $config.apiUrl + '/' + imageSrc);
            }
          } else {
            ee.setAttribute('src', require('../assets/images/no-photo.png'));
          }
        }
      }
    };
  }])
  .directive("mdl", [function () {
    return {
      link: function (scope, element, attributes) {
        setTimeout(() => {
          componentHandler.upgradeAllRegistered();
        })
      }
    };
  }])
  .directive('mdlRepeat', function () {
    return function (scope, element, attrs) {
      if (scope.$last) {
        setTimeout(() => {
          componentHandler.upgradeAllRegistered();
        })
      }
    };
  })
  .directive("navEvent", ['$config', function ($config) {
    return {
      scope: {
        value: "@"
      },
      controller: ['$rootScope', '$scope', '$location', '$window', ($rootScope, $scope, $location, $window) => {
        $scope.onNavEvent = (value) => {
          if ('back' === value) {
            $window.history.back();
            return;
          }
          if ($rootScope.onNavEvent) {
            var path = $rootScope.onNavEvent(value);
            if (path) {
              $scope.$apply(() => {
                $location.path(path);
              });
              return;
            }
          }
        }
      }],
      link: function (scope, element, attributes) {
        for (var i = 0; i < element.length; i++) {
          element[i].addEventListener(attributes.navEvent, () => {
            if (scope.onNavEvent) scope.onNavEvent(scope.value);
          });
        }
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
            if (backgroundSrc && scope.size) {
              var ii = backgroundSrc.lastIndexOf('/');
              backgroundSrc = backgroundSrc.substr(0, ii + 1) + scope.size + backgroundSrc.substr(ii);
              element[i].style.backgroundImage = 'url(' + $config.apiUrl + '/' + backgroundSrc + '), url(' + require('../assets/images/no-photo.png') + ')';
            } else {
              element[i].style.backgroundImage += 'url(' + require('../assets/images/no-photo.png') + ')';
            }
          }
        }
      }
    };
  }])
  .directive('ngRequired', function ($compile) {
    return {
      require: '?ngModel',
      link: function (scope, el, attrs, ngModel) {
        if (!ngModel) {
          return;
        }
        if (attrs['ng-required'] === "true") {
          el.attr('required', true);
          $compile(el[0])(scope);
        }
        else {
          el.removeAttr('ng-required');
          console.log('should not require');
        }
      }
    };
  })
  .directive('dateTimePicker', function ($compile) {
    return {
      require: '?ngModel',
      scope: {
        datepicker: "@",
        format: "@",
        step: "@"
      },
      link: function (scope, el, attrs, ngModel) {
        if (!ngModel) {
          return;
        }
        var e = $(el);
        e.datetimepicker({
          datepicker: JSON.parse(scope.datepicker),
          format: scope.format,
          step: +scope.step
        });
        scope.$watch(function () {
          return e.datetimepicker('getValue');
        }, (n, o) => {
          ngModel.$setViewValue(e.val());
          ngModel.$render();
        });
      }
    };
  })
  ;