module.exports = {
    name: 'pluginForm',
    template: require('./plugin-form.html'),
    bindings: {
        data: '<'
    },
    controller: ['$scope', '$config', 'ShellClass', 'ExecuteLogs', 'UploadPackage', function($scope, $config, ShellClass, ExecuteLogs, UploadPackage) {
        require('./plugin-form.css');

        var self = this;
        this.oRes = {};
        this.currentData = {};
        this.currentData.data = {};
        this.isExecute = 0;
        this.myFile;
        this.url = UploadPackage.uploadUrl;

        this.$routerOnActivate = () => {
            ShellClass.getScripts().then((res) => {
                self.obj = res.data;
            });
        };

        this.loadingLogs = () => {
            ExecuteLogs.getTopLogs(10).then((res) => {
                this.logs = res.data;
            });
        }
        this.transfer = (data) => {
            return JSON.stringify(data, null, '\n');
        }

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

            self.obj.splice(0, 0, rs.resp.data.ops[0]);
        };

        this.SelectPlugin = () => {
            this.currentData = {};
            this.currentData.data = {};

            this.oRes = {};
        }

        this.exeTime = (t1, t2) => {
            var timestamp1 = new Date(t1).getTime();
            var timestamp2 = new Date(t2).getTime();

            var diff = timestamp2 - timestamp1
            return diff;
        }

        this.removeScript = (item) => {
            ShellClass.deleteScript(item._id).then((res) => {
                self.obj.splice(self.obj.indexOf(item), 1);
            });
        };
        this.exec = () => {

            this.currentData._id = this.current._id;
            this.currentData.name = this.current.name;
            this.currentData.des = this.current.des;
            this.currentData.target = this.current.target;

            //parser data type
            var o = {};
            for (var i = 0; i < this.current.input.length; i++) {
                o = this.current.input[i];
                if (o.type == 'Number') {
                    this.currentData.data[o.param] = parseInt(this.currentData.data[o.param]);

                }
            }

            // set active tab and remove tab actived
            angular.element(document.querySelector('#tUpload')).removeClass('active');
            angular.element(document.querySelector('#upload')).removeClass('active in');

            angular.element(document.querySelector('#tLogs')).removeClass('active');
            angular.element(document.querySelector('#logs')).removeClass('active in');

            angular.element(document.querySelector('#tResult')).addClass('active');
            angular.element(document.querySelector('#result')).addClass('active in');


            var socket;
            ShellClass.execute(this.currentData._id, this.currentData.data).then((res) => {
                // console.log("go inside" + JSON.stringify(res.data));
                if (!socket) {
                    socket = io($config.apiUrl);
                    socket.on('connected', function() {
                        socket.emit('bind', res.data);
                        $scope.$apply(function() {
                            self.isExecute = 1;
                        })

                    });
                    socket.on('completed', function(info) {
                        console.log("succ");
                        self.oRes = info;
                        $scope.$apply(function() {
                            self.isExecute = 0;
                        })
                    });
                } else {
                    socket.emit('bind', res.data);
                    $scope.$apply(function() {
                        self.isExecute = 1;
                    })
                }
            });
        };
    }]
}