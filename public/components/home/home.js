app.component('home', {
    template: require('./home.html'),
    controller: ['$config', 'Product', '$scope', function ($config, Product, $scope) {
        require('./home.scss');
        this.$routerOnActivate = (next) => {
            Product.search().then((resp) => {
                this.list = resp.data.map((e) => {
                   e.images = !e.images ? [] : (e.images instanceof Array ? e.images : [e.images]);
                   return e;                     
                });
            })
        }
        $scope.currentIndex = 0;
        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };
        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };
    }]
});
