module.exports = {
    name: 'pluginForm',
    template: require('./plugin-form.html'),
    bindings: {
        data: '<'
    },
    controller: ['$scope', '$config', 'ShellClass', 'ExecuteLogs', 'UploadPackage', '$timeout', 'SocketIO', function($scope, $config, ShellClass, ExecuteLogs, UploadPackage, $timeout, SocketIO) {
        require('./plugin-form.scss');

        var self = this;
        self.tempTab = {};
        self.currentData = {};
        self.currentData.inputData = {};
        self.isExecute = 0;
        self.myFile;
        self.url = UploadPackage.uploadUrl;
        var socket;

        this.$routerOnActivate = () => {
            ShellClass.getSuccessPlugins().then((res) => {
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

        this.SelectPlugin = () => {
            self.currentData = {};
            self.currentData.inputData = {};
            if (self.obj[self.slIndex]) {
                ShellClass.getInstancesByClass(self.obj[self.slIndex]._id).then((res) => {
                    self.lstInstances = res.data;
                });
            }
        }

        this.getInfor = (instanceID) => {
            ShellClass.getInfoInstance(instanceID).then((res) => {
                console.log("getInfoInstance : ", res.data);

                SocketIO.bind(res.data).connected((resp) => {
                    // connected
                }).completed((resp) => {
                    // done
                    resp = JSON.parse(resp);
                    console.log(resp);
                });
            });
        }

        this.deploy = (_index) => {
            ShellClass.deploy(self.lstInstances[_index]._id).then((res) => {
                self.lstInstances[_index].status = 2;

                SocketIO.bind(res.data).connected((resp) => {
                    // connected
                }).completed((resp) => {
                    // done
                    resp = JSON.parse(resp);
                    $scope.$apply(function() {
                        if (resp.event_type == 2 && resp.status == 1) {
                            self.lstInstances[_index].status = 3;
                        }
                        if (resp.event_type == 2 && resp.status == -1) {
                            self.lstInstances[_index].status = -3;
                        }
                    });
                });
            });
        };

        this.unDeploy = (_index) => {
            ShellClass.unDeploy(self.lstInstances[_index]._id).then((res) => {
                self.lstInstances[_index].status = 4;

                SocketIO.bind(res.data).connected((resp) => {
                    // connected
                }).completed((resp) => {
                    // done
                    resp = JSON.parse(resp);
                    $scope.$apply(function() {
                        if (resp.event_type == -2 && resp.status == 1) {
                            self.lstInstances[_index].status = 5;
                        }
                        if (resp.event_type == -2 && resp.status == -1) {
                            self.lstInstances[_index].status = -5;
                        }
                    });
                });
            });
        }

        this.remove = (_index) => {
            var removeId = self.lstInstances[_index]._id;
            ShellClass.deleteInstance(self.lstInstances[_index]._id).then((res) => {
                self.lstInstances[_index].status = 6;
                SocketIO.bind(res.data).connected((resp) => {
                    // connected
                }).completed((resp) => {
                    // done
                    resp = JSON.parse(resp);
                    $scope.$apply(function() {
                        if (resp.event_type == -1 && resp.status == 1 && removeId == self.lstInstances[_index]._id) {
                            self.lstInstances.splice(_index, 1);
                        }
                        if (resp.event_type == -1 && resp.status == -1 && removeId == self.lstInstances[_index]._id) {
                            self.lstInstances[_index].status = -7;
                        }
                    });
                });
            });
        }

        this.addInstancePlugin = () => {
            this.currentData.shellclass_id = self.obj[self.slIndex]._id;

            //parser data type
            var o = {};
            for (var i = 0; i < self.obj[self.slIndex].input.length; i++) {
                o = self.obj[self.slIndex].input[i];
                if (o.type == 'Number') {
                    this.currentData.data[o.param] = parseInt(this.currentData.data[o.param]);
                }
            }

            // console.log(JSON.stringify(this.currentData));
            ShellClass.addInstance(this.currentData).then((res) => {
                // console.log(JSON.stringify(res));
                if (!res.data.error) {
                    // opacity: 0.4;
                }
                $('#myModal').modal('hide');
                // Success : opacity: 1.4;
                self.lstInstances.push(res.data.instance);

                self.tempTab = {};
                self.tempTab._id = res.data.instance._id;
                self.tempTab.style = "opacity: 0.5;";

                SocketIO.bind(res.data.session).connected((resp) => {
                    // connected
                }).completed((resp) => {
                    // done
                    resp = JSON.parse(resp);
                    console.log(resp);
                    if (resp.event_type == 1 && resp.status == 1) {
                        $scope.$apply(function() {
                            self.tempTab.style = "opacity: 1.5;";
                            self.lstInstances[self.lstInstances.indexOf(res.data.instance)].status = 1;
                        });
                    } else if (resp.event_type == 1 && resp.status == -1) {
                        $scope.$apply(function() {
                            self.lstInstances.splice(self.lstInstances.indexOf(res.data.instance), 1);
                        });
                    }
                });

            });
        }

        this.exeTime = (t1, t2) => {
            var timestamp1 = new Date(t1).getTime();
            var timestamp2 = new Date(t2).getTime();

            var diff = timestamp2 - timestamp1
            return diff;
        }

        this.removeScript = (item) => {
            ShellClass.deleteScript(item._id).then((res) => {
                console.log(res);
                self.obj.splice(self.obj.indexOf(item), 1);
                self.lstInstances = [];

                SocketIO.bind(res.data).connected((resp) => {
                    // connected
                }).completed((resp) => {
                    // done
                    resp = JSON.parse(resp);
                    console.log(resp);
                });
            });
        };

        //multiple choice
        if (!ace.vars['touch']) {
            $('.chosen-select').chosen({ allow_single_deselect: true });

            $('#chosen-multiple-style .btn').on('click', function(e) {
                var target = $(this).find('input[type=radio]');
                var which = parseInt(target.val());
                if (which == 2) $('#form-field-select-4').addClass('tag-input-style');
                else $('#form-field-select-4').removeClass('tag-input-style');
            });
        };

        // this.exec = () => {

        //     this.currentData._id = this.current._id;
        //     this.currentData.name = this.current.name;
        //     this.currentData.des = this.current.des;
        //     this.currentData.target = this.current.target;

        //     //parser data type
        //     var o = {};
        //     for (var i = 0; i < this.current.input.length; i++) {
        //         o = self.obj[self.slIndex].input[i];
        //         if (o.type == 'Number') {
        //             this.currentData.data[o.param] = parseInt(this.currentData.data[o.param]);
        //         }
        //     }

        //     // set active tab and remove tab actived
        //     angular.element(document.querySelector('#tUpload')).removeClass('active');
        //     angular.element(document.querySelector('#upload')).removeClass('active in');

        //     angular.element(document.querySelector('#tLogs')).removeClass('active');
        //     angular.element(document.querySelector('#logs')).removeClass('active in');

        //     angular.element(document.querySelector('#tResult')).addClass('active');
        //     angular.element(document.querySelector('#result')).addClass('active in');



        //     ShellClass.execute(this.currentData._id, this.currentData.data).then((res) => {
        //         console.log("go inside" + JSON.stringify(res.data));
        //         if (!socket) {
        //             socket = io($config.apiUrl);
        //             socket.on('connected', function() {
        //                 console.log('connected', res.data);
        //                 socket.emit('bind', res.data);
        //                 $scope.$apply(function() {
        //                     self.isExecute = 1;
        //                 })
        //             });
        //             socket.on('completed', function(info) {
        //                 console.log("succ" + JSON.stringify(info));
        //                 self.oRes = info;
        //                 $scope.$apply(function() {
        //                     self.isExecute = 0;
        //                 })
        //             });
        //         } else {
        //             console.log('connected 2', res.data);
        //             socket.emit('bind', res.data);
        //             $scope.$apply(function() {
        //                 self.isExecute = 1;
        //             })
        //         }
        //     });
        // };
    }]
}