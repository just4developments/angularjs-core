module.exports = {
    name: 'uploadPackage',
    template: require('./upload-package.html'),
    bindings: {
        data: '<'
    },
    controller: ['$scope', '$config', 'ShellClass', 'ExecuteLogs', 'UploadPackage', 'SocketIO', function($scope, $config, ShellClass, ExecuteLogs, UploadPackage, SocketIO) {
        require('./upload-package.scss');

        var self = this;
        self.myFile;
        self.url = UploadPackage.uploadUrl;

        this.$routerOnActivate = () => {
            ShellClass.getSuccessPlugins().then((res) => {
                self.obj = res.data;
            });
        };

        this.uploadDone = function(rs) {

            if (rs.error) {
                $.gritter.add({
                    title: 'Error',
                    text: 'Can\'t upload file',
                    class_name: 'gritter-error'
                });
                return;
            }
            console.log(rs);
            var running_item = rs.resp.data.class;
            running_item.status = 0;
            // self.obj.splice(0, 0, running_item);
            self.obj.push(running_item);
            SocketIO.bind(rs.resp.data.session).connected((resp) => {
                // connected
            }).completed((resp) => {
                resp = JSON.parse(resp);
                console.log(resp);
                //Done:
                var status;
                if (resp.event_type == 0 && resp.status == 1) {
                    status = {
                        title: 'Success',
                        text: 'File \'' + resp.title + '\' upload successfully',
                        class_name: 'gritter-success'
                    };
                    $scope.$apply(function() {
                        self.obj[self.obj.indexOf(running_item)].status = 1;
                    });

                } else if (resp.event_type == 0 && resp.status == -1) {
                    status = {
                        title: 'Error',
                        text: 'Can\'t upload file (Error: ' + resp.result.error + ')',
                        class_name: 'gritter-error'
                    };
                    $scope.$apply(function() {
                        self.obj[self.obj.indexOf(running_item)].status = -1;
                    });
                }
                if (status) {
                    $.gritter.add(status);
                }
            });
        };


    }]
}