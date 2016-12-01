app.component('aboutus', {
    template: require('./aboutus.html'),
    controller: ['$config', '$window', 'FacebookLoader', function ($config, $window, FacebookLoader) {
        require('./aboutus.scss');
        this.href = $config.webUrl;
        this.loadComment = () => {
            setTimeout(function() {
                FacebookLoader.load($window.document.querySelector('#comAboutus')[0]);
            });                    
        };
    }]
});
