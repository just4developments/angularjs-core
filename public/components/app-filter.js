const InstanceStatus = {
    '0': 'Creating',
    '1': 'New',
    '-1': 'Create failed',
    '2': 'Deploying',
    '3': 'Deployed',
    '-3': 'Deploy failed',
    '4': 'Undeloying',
    '5': 'Undeployed',
    '-5': 'Undeploy failed',
    '6': 'Deleting',
    '7': 'Deleted',
    '-7': 'Delete failed'
};
module.exports = {
    instanceStatus: ['$filter', function($filter) {
        return function(input) {
            return InstanceStatus[input.toString()];
        };
    }],
    money: ['$filter', function($filter) {
        return function(input, symbol) {
            if (input === undefined) return '';
            return $filter('number')(+input) + ' ' + symbol;
        };
    }],
    mformat: ['$filter', function($filter) {
        return function(input, str) {
            if (input === undefined) return '';
            return str.replace('$n', $filter('number')(+input));
        };
    }],
    amPm: ['$filter', function($filter) {
        return function(input, symbol) {
            if (input === undefined) return '';
            var tmp = input.split(':');
            var hour = +tmp[0];
            var min = +tmp[1];
            if (hour > 12) return (hour - 12) + ':' + min + ' PM';
            else return hour + ':' + min + ' AM';
        };
    }]
}