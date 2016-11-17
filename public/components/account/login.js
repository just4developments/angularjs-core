module.exports = {
    name: 'login',
    template: require('./login.html'),
    controller: ['$config', function ($config) {
        require('./login.scss');
        this.$routerOnActivate = (next) => {
            
        }
        
    }]
}
