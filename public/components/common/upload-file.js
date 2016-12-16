module.exports = {
    name: 'uploadFile',
    template: require('./upload-file.html'),
    bindings: {
        url: '<',
        fields: '<',
        name: '@',
        fileSrc: '=',
        accept: '@',
        onFinished: '&'
    },
    controller: ['$config', 'Upload', '$timeout', function($config, Upload, $timeout) {
        require('./upload-file.scss');
        var self = this;
        this.classTitle = 'Drop files here or click to choose';
        this.body = this.fields || {};
        this.upload = function(file) {
            if (!file) return;
            self.percent = 0;
            self.className = 'progress';
            self.body[self.name] = file;
            Upload.upload({
                url: self.url,
                headers: self.headers,
                data: self.body
            }).then(function(resp) {
                // console.log('done');
                self.classTitle = 'Uploaded successfully';
                self.className = 'done';
                self.percent = 100;
                if (self.onFinished) self.onFinished({ resp: resp });
            }, function(err) {
                console.log('err');
                self.classTitle = 'Uploaded fail';
                self.className = 'error';
                self.percent = 100;
                if (self.onFinished) self.onFinished({ error: err });
            }, function(evt) {
                self.classTitle = self.percent + '%';
                self.percent = parseInt(100 * evt.loaded / evt.total);
            });
        }
    }]
}