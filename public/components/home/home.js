app.component('home', {
    template: require('./home.html'),
    bindings: { $router: '<' },
    controller: ['$config', 'Product', 'Category', '$scope', 'Upload', '$window', '$rootScope', function ($config, Product, Category, $scope, Upload, $window, $rootScope) {
        require('./home.scss');
        var self = this;
        this.activeIndex = location.href.indexOf('hot') !== -1 ? 1 : 0;
        this.$routerOnActivate = (next) => {            
            $rootScope.categoryId = next.params.categoryId;
            self.categoryId = next.params.categoryId;
        };
        this.goTo = (filter, index) => {
            self.activeIndex = index;
            self.$router.navigate(['ProductNewestByFilter', {filter: filter}]);
        }
    }],
    $routeConfig: [
        {path: '/', name: 'ProductNewest', component: 'product', useAsDefault: true},        
        {path: '/:filter', name: 'ProductNewestByFilter', component: 'product'}
    ]
});