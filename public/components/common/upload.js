// app.directive('fileModel', ['$parse', function ($parse) {
//   return {
//     restrict: 'A',
//     link: function (scope, element, attrs) {
//       var model = $parse(attrs.fileModel);
//       var modelSetter = model.assign;
//       element.on('change', function () {
//         scope.$apply(function () {
//           modelSetter(scope, element[0].files[0]);
//         });
//       });
//     }
//   };
// }]);

app.service('Upload', ['$http', function ($http) {
  this.uploadFileToUrl = function (body, uploadUrl) {
    var fd = new FormData();
    for(var i in body){
      if(body[i] instanceof Object && !(body[i] instanceof File)){
        fd.append(i, JSON.stringify(body[i]));
      }else{
        fd.append(i, body[i]);
      }
    }
    return $http.post(uploadUrl, fd, {
      transformRequest: angular.identity,
      headers: {
        'Content-Type': undefined
      }
    });
  }
}]);

app.component('uploadFile', {
  template: require('./upload.html'),
  bindings: {
    fileModel: '=',
    name: '@'
  },
  controller: ['$element', '$attrs', '$scope', '$parse', function ($element, $attrs, $scope, $parse) {
    require('./upload.scss');
    var self = this;    
    $element.on('change', function (e) {
      $scope.$apply(function () {
        self.fileModel = e.target.files[0];
      });
    });
  }]
});