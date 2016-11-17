// http://livedemo00.template-help.com/prestashop_55246/
require('./my-app.scss');
app.component('myApp', {
    template: require('./my-app.html'),
    $routeConfig: [
        {path: '/...', name: 'HomeNewest', component: 'home', useAsDefault: true},
        {path: '/:categoryId/...', name: 'HomeNewestByCategoryId', component: 'home'}
    ],
    controller: ['$config', 'Category', '$scope', '$location', '$window', function ($config, Category, $scope, $location, $window) {
        let self = this;
        this.activeIndex = 0;
        Category.find().then((resp) => {
            self.categories = $window.sessionStorage.categories = resp.data;
            for(var i in self.categories){
                if($window.location.href.indexOf(self.categories[i]._id) != -1){
                    self.activeIndex = i;
                }
            }
        });
        this.goTo = (id, index) => {
            self.activeIndex = index;
            $location.path(`${id}/moi-nhat`);
        }
    }]
});
