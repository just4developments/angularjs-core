module.exports = {
    name: 'uploadPackage',
    template: require('./upload-package.html'),
    bindings: {
        data: '<'
    },
    controller: ['$config', 'UploadPackage', '$http', function($config, UploadPackage, $http) {
        require('./upload-package.css');

        var self = this;
        this.myFile;
        this.url = UploadPackage.uploadUrl;

        this.uploadDone = function(rs) {
            if (rs.error) {
                $.gritter.add({
                    title: 'Error',
                    text: 'Can\'t upload file',
                    class_name: 'gritter-error'
                });
                return;
            }
            //Done: 
            $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'Success',
                // (string | mandatory) the text inside the notification
                text: 'File \'' + rs.resp.data.ops[0].name + '\' upload successfully',
                class_name: 'gritter-success'
            });
        };


    }]
}