module.exports = {
    name: 'exeLogs',
    template: require('./exe-logs.html'),
    bindings: {
        data: '<'
    },
    controller: ['$config', 'ExecuteLogs', 'SocketIO', '$scope', function($config, ExecuteLogs, SocketIO, $scope) {
        require('./exe-logs.scss');
        let self = this;
        self.systemLogs = {
            id: 'MainWindow',
            title: 'System logs',
            sections: [{
                id: 'MainSection',
                title: 'Log information',
            }]
        };
        $('.dd').nestable();
        ExecuteLogs.getTopLogs(10).then((res) => {
            this.logs = res.data;
        });        
        this.transfer = (data) => {
            return JSON.parse(data);
        }
        if(!window.localStorage.logWindows){
            ExecuteLogs.run('585b9d5ec1b8733cecc469ff').then((resp) => {
                self.logWindows = resp.data.logInfo;
                window.localStorage.sessionId = resp.data.sessionId;
                window.localStorage.logWindows = JSON.stringify(self.logWindows);
                SocketIO.bind(resp.data.sectionId);
            });
        }else{
            self.logWindows = JSON.parse(window.localStorage.logWindows);
            SocketIO.bind(window.localStorage.sessionId);
        }
    }]
}