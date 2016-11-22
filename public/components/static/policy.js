app.component('policy', {
    template: require('./policy.html'),
    controller: ['$config', function ($config) {
        require('./policy.scss');
        this.$routerOnActivate = (next) => {
            
        }
        
    }]
});
