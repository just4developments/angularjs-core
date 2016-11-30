app
  .directive("goTo", ['$location', function ($location) {
    return {
      link: function (scope, element, attributes) {
        element.on("click", () => {
          $location.path(attributes.goTo);
        })
      }
    };
  }])
  .directive("showDetails", ['$location', '$mdDialog', '$window', function ($location, $mdDialog, $window) {
    return {
      scope: {
        item: "<",
        index: "<"
      },
      link: function (scope, element, attributes) {
        element.on("click", () => {
          $mdDialog.show({
            template: `<md-dialog aria-label="Image dialog" class="details">
             <md-button class="md-icon-button" style="position: absolute; right: 4px; z-index: 2; top: 0px; cursor: pointer; text-shadow: 0px 0px 1px #fff;" ng-click="close()"><md-icon>close</md-icon></md-button>
             <md-dialog-content layout="row" layout-wrap>
               <div flex="70" flex-xs="100" flex-sm="100" class="content">
                <img image-src="item.images[index]" width="100%" ng-click="next()" watch="true" />
                <div layout-padding style="position: absolute; bottom: 0px; right: 8px; color: #d92469; font-size: 0.9em;">{{index+1}}/{{item.images.length}}</div>
               </div>
               <div flex class="comment">
                    <h3 class="card-name" style="font-size: 1.2em">{{item.name}}</h3>
                    <p class="card-des">{{item.des}}</p>
                    <div class="card-money" style="font-size: 1.1em">Giá: {{item.money | money}}</div>
                    <br/><br/>
                    <div ng-init="loadComment()" class="fb-comments" data-href="{{href}}" data-width="100%" data-numposts="5" data-colorscheme="light" data-include-parent="false"></div>
               </div>
             </md-dialog-content>             
           </md-dialog>`,
            parent: angular.element($window.document.body),
            locals: {
              item: scope.item,
              index: scope.index
            },
            clickOutsideToClose: true,
            escapeToClose: true,
            controller: ['$scope', '$mdDialog', 'item', 'index', '$window', '$config', ($scope, $mdDialog, item, index, $window, $config) => {
              $scope.item = item;
              $scope.index = index;
              $scope.href = $config.apiUrl + '/product/' + item._id;
              $scope.next = () => {
                if (++$scope.index > $scope.item.images.length - 1) {
                  $scope.index = 0;
                }
              }
              $scope.close = () => {
                $mdDialog.hide();
              }
              $scope.loadComment = () => {
                setTimeout(() => {
                  $window.FB.XFBML.parse();
                });
              };
            }]
          });
        });
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
        size: "<",
        watch: "<"
      },
      link: function (scope, element, attributes) {
        var handle = () => {
          var backgroundSrc = scope.backgroundSrc;
          if (typeof scope.backgroundSrc !== 'string') return;
          for (var i = 0; i < element.length; i++) {
            if (backgroundSrc.startsWith("http://") || backgroundSrc.startsWith("https://")) {
              element[i].style.backgroundImage = 'url(' + backgroundSrc + '), url(' + require('../assets/images/no-photo.png') + ')';
            } else {
              if (backgroundSrc) {
                if (scope.size) {
                  var ii = backgroundSrc.lastIndexOf('.');
                  backgroundSrc = backgroundSrc.substr(0, ii) + '.' + scope.size + backgroundSrc.substr(ii);
                  element[i].style.backgroundImage = 'url(' + $config.apiUrl + backgroundSrc + '), url(' + require('../assets/images/no-photo.png') + ')';
                } else {
                  element[i].style.backgroundImage = 'url(' + $config.apiUrl + backgroundSrc + ')';
                }
              } else {
                element[i].style.backgroundImage += 'url(' + require('../assets/images/no-photo.png') + ')';
              }
            }
          }
        };
        if (scope.watch) {
          scope.$watch('backgroundSrc', function () {
            handle();
          });
        } else {
          handle();
        }
      }
    };
  }])
  .directive("imageSrc", ['$config', function ($config) {
    return {
      scope: {
        imageSrc: "<",
        size: "<",
        watch: "<"
      },
      link: function (scope, element, attributes) {
        var handle = () => {
          for (var i = 0; i < element.length; i++) {
            var ee = element[i];
            ee.addEventListener('error', (e) => {
              ee.setAttribute('src', require('../assets/images/no-photo.png'));
            });
            if (typeof scope.imageSrc != 'undefined' && scope.imageSrc != null) {
              if (typeof scope.imageSrc !== 'string') return;
              if (scope.imageSrc.startsWith("http://") || scope.imageSrc.startsWith("https://")) {
                ee.setAttribute('src', scope.imageSrc);
              } else {
                var imageSrc = scope.imageSrc;
                if (imageSrc && scope.size) {
                  var ii = imageSrc.lastIndexOf('.');
                  imageSrc = imageSrc.substr(0, ii) + '.' + scope.size + imageSrc.substr(ii);
                }
                ee.setAttribute('src', $config.apiUrl + imageSrc);
              }
            } else {
              ee.setAttribute('src', require('../assets/images/no-photo.png'));
            }
          }
        };
        if (scope.watch) {
          scope.$watch('imageSrc', function () {
            handle();
          });
        } else {
          handle();
        }
      }
    };
  }]);