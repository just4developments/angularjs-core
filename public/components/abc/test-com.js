module.exports = {
    name: 'test',
    template: require('./test-com.html'),
    controller: ['$config', function ($config) {
        require('./test-com.scss');
        this.$routerOnActivate = () => {
            
        }        
    }]
}