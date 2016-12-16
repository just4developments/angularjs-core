module.exports = {
    Cuisine: ['$http', '$rootScope', '$config', '$q', function($http, $rootScope, $config, $q) {
        return {
            findById: (id) => {
                var cuisine = null;
                $rootScope.cuisines.forEach(item => {
                    if (item.id == id)
                        cuisine = item;
                });
                return cuisine;
            },
            search: (name) => {
                var deferred = $q.defer();
                var rs = [];
                name = name.toLowerCase();
                for (var item of $rootScope.cuisines) {
                    if (item.name.toLowerCase().indexOf(name) != -1 || item.des.toLowerCase().indexOf(name) != -1)
                        rs.push(item);
                }
                setTimeout(() => {
                    deferred.resolve({
                        data: rs
                    });
                }, 500);
                return deferred.promise;
            },
            find: () => {
                // Used in new version
                return $http.get(`${$config.apiUrl}/whatseat/cuisine`);
            },
            load: () => {
                $http.get(`${$config.apiUrl}/whatseat/cuisine`).then((res) => {
                    $rootScope.cuisines = res.data;
                });
            }
        };
    }],
    ShellClass: ['$http', '$rootScope', '$config', '$q', function($http, $rootScope, $config, $q) {

        return {
            execute: (id, data) => {
                return $http.post(`${$config.apiUrl}/ShellClass/execute/${id}`, data);
            },
            addInstance: (data) => {
                return $http.post(`${$config.apiUrl}/ShellInstance`, data);
            },
            deleteInstance: (id) => {
                return $http.delete(`${$config.apiUrl}/ShellInstance/${id}`);
            },
            deploy: (id) => {
                return $http.post(`${$config.apiUrl}/ShellInstance/deploy/${id}`);
            },
            unDeploy: (id) => {
                return $http.delete(`${$config.apiUrl}/ShellInstance/deploy/${id}`);
            },
            getSuccessPlugins: () => {
                return $http.get(`${$config.apiUrl}/ShellClass?status=1`);
            },
            getAllPlugins: () => {
                return $http.get(`${$config.apiUrl}/ShellClass`);
            },
            deleteScript: (id) => {
                return $http.delete(`${$config.apiUrl}/ShellClass/${id}`);
            },
            getInstancesByClass: (id) => {
                return $http.get(`${$config.apiUrl}/ShellInstanceByClass/${id}`);
            },
            getInfoInstance: (instanceId) => {
                return $http.get(`${$config.apiUrl}/ShellInstance/information/${instanceId}`);
            },
            restart: (instanceId) => {
                return $http.post(`${$config.apiUrl}/ShellInstance/execute-script/${instanceId}/restart`);
            }
        };
    }],
    UploadPackage: ['$http', '$rootScope', '$config', '$q', function($http, $rootScope, $config, $q) {

        return {
            uploadUrl: `${$config.apiUrl}/ShellClass`,
            maxUpload: 12, // max uploading file
        };
    }],
    ExecuteLogs: ['$http', '$rootScope', '$config', '$q', function($http, $rootScope, $config, $q) {

        return {
            getLogs: () => {
                return $http.get(`${$config.apiUrl}/ExecutingLogs`);
            },
            getTopLogs: (count) => {
                return $http.get(`${$config.apiUrl}/ExecutingLogs?recordsPerPage=${count}&page=1`);
            }
        };
    }],
    SocketIO: ['$http', '$rootScope', '$config', '$q', function($http, $rootScope, $config, $q) {

        var self = {
            bind: (sessionId, fcConnected, fcCompleted) => {
                if (!$rootScope.socket) {
                    $rootScope.socket = io($config.apiUrl);
                    $rootScope.socket.on('connected', function(data) {
                        $rootScope.$broadcast('iosocket.connected', data);
                        $rootScope.socket.emit('bind', sessionId);
                    });
                    $rootScope.socket.on('completed', function(data) {
                        $rootScope.$broadcast('iosocket.completed', data);
                    });
                } else {
                    $rootScope.socket.emit('bind', sessionId);
                }
                return self;
            },
            completed: (fcCompleted) => {
                $rootScope.$on('iosocket.completed', (evt, data) => {
                    fcCompleted(data);
                });
                return self;
            },
            connected: (fcConnected) => {
                $rootScope.$on('iosocket.connected', (evt, data) => {
                    fcConnected(data);
                });
                return self;
            }
        };
        return self;
    }]
}