app.component('banner', {
    template: require('./banner.html'),
    controller: ['$config', function ($config) {
        require('./banner.scss');
        this.$routerOnActivate = (next) => {
            
        }
        
    }]
});
