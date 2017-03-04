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
  this.uploadFileToUrl = function (body, uploadUrl, method) {
    var fd = new FormData();
    for(var i in body){
      if(body[i] instanceof FileList && body[i].length > 0){
        for(var j in body[i]){
          fd.append(i, body[i][j]);
        }
      }else if(body[i] instanceof Object && !(body[i] instanceof File)){
        fd.append(i, angular.toJson(body[i]));
      }else{
        fd.append(i, body[i]);
      }
    }
    if('PUT' === method){
      return $http.put(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {
          'Content-Type': undefined
        }
      });  
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
    imgSrc: '=',
    fileModel: '=',
    name: '@'
  },
  controller: ['$element', '$attrs', '$scope', '$parse', '$window', function ($element, $attrs, $scope, $parse, $window) {
    require('./upload.scss');
    var self = this; 
    $element.on('change', function (e) {
      $scope.$apply(function () {
        self.fileModel = e.target.files;
      });
      var selectedFile = event.target.files[0];
      var reader = new FileReader();
      var imgtag = document.getElementById("imageUpload");
      imgtag.title = selectedFile.name;
      reader.onload = function(event) {
        imgtag.src = event.target.result;
      };
      reader.readAsDataURL(selectedFile);
    });
    this.open = () => {
      $window.document.querySelector('#'+self.name).click();
    }
  }]
});