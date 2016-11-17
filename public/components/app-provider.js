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
            getScripts: () => {
                return $http.get(`${$config.apiUrl}/ShellClass`);
            },
            deleteScript: (id) => {
                return $http.delete(`${$config.apiUrl}/ShellClass/${id}`);
            }
        };
    }],
    UploadPackage: ['$http', '$rootScope', '$config', '$q', function($http, $rootScope, $config, $q) {

        return {
            uploadUrl: `${$config.apiUrl}/ShellClass/upload`,
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
    }]
}