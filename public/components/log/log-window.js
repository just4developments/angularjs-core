module.exports = {
    name: 'logWindow',
    bindings: {
        windowId: '<',
        sectionIds: '<',
        windowTitle: '<'
    },
    template: require('./log-window.html'),
    controller: ['$config', function ($config) {
        require('./log-window.scss');
        this.$routerOnActivate = (next) => {
            
        }
        
    }]
}
