app.component('home', {
    template: require('./home.html'),
    bindings: { $router: '<' },
    controller: ['$config', 'Product', 'Category', '$scope', 'Upload', '$window', function ($config, Product, Category, $scope, Upload, $window) {
        require('./home.scss');
        var self = this;
        this.activeIndex = 0;
        this.$routerOnActivate = (next) => {
             $window.sessionStorage.categoryId = next.params.categoryId;
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