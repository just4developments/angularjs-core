module.exports = {
    name: 'addInstance',
    template: require('./add-instance.html'),
    controller: ['$config', function ($config) {
        require('./add-instance.scss');
        this.$routerOnActivate = (next) => {
            
        }
        
    }]
}
