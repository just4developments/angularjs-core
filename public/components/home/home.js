app.component('home', {
    template: require('./home.html'),
    bindings: { $router: '<' },
    controller: ['$config', 'Product', 'Category', '$scope', 'Upload', '$window', '$rootScope', function ($config, Product, Category, $scope, Upload, $window, $rootScope) {
        require('./home.scss');
        var self = this;
        $rootScope.tagFilter = [];
        this.activeIndex = location.href.indexOf('hot') !== -1 ? 1 : 0;
        this.$routerOnActivate = (next) => {            
            $rootScope.categoryId = next.params.categoryId;
            self.categoryId = next.params.categoryId;
            Category.find(2).then((resp) => {
                self.tags = resp.data.map((e) => {
                    if(e.default){
                        $rootScope.tagFilter = [e];
                    }
                    return e;
                });
            });
        };
        this.exists = function (item) {
            return _.findIndex($rootScope.tagFilter, (e) => {
                return e._id == item._id;
            }) > -1;
        }
        this.goTo = (filter, index) => {
            self.activeIndex = index;
            self.$router.navigate(['ProductNewestByFilter', {filter: filter}]);
        }
        this.addFilter = (tag) => {
            var idx = _.findIndex($rootScope.tagFilter, (e) => {
                return e._id == tag._id;
            });
            if (idx > -1) $rootScope.tagFilter.splice(idx, 1);
            else $rootScope.tagFilter.push(tag);
        }
    }],
    $routeConfig: [
        {path: '/', name: 'ProductNewest', component: 'product', useAsDefault: true},        
        {path: '/:filter', name: 'ProductNewestByFilter', component: 'product'}
    ]
});