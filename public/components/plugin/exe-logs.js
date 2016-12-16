module.exports = {
    name: 'exeLogs',
    template: require('./exe-logs.html'),
    bindings: {
        data: '<'
    },
    controller: ['$config', 'ExecuteLogs', function($config, ExecuteLogs) {
        require('./exe-logs.scss');

        ExecuteLogs.getTopLogs(10).then((res) => {
            this.logs = res.data;
        });

        this.transfer = (data) => {
            return JSON.parse(data);
        }
    }]
}