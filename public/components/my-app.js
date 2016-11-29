// http://livedemo00.template-help.com/prestashop_55246/
require('./my-app.scss');
app.component('myApp', {
    template: require('./my-app.html'),
    $routeConfig: [
        {path: '/transaction', name: 'Transaction', component: 'transaction'},
        {path: '/policy', name: 'Policy', component: 'policy'},
        {path: '/:categoryId/...', name: 'HomeNewestByCategoryId', component: 'home'}
    ],
    controller: ['$config', 'Category', '$scope', '$location', '$window', '$mdSidenav', '$rootScope', '$facebook', function ($config, Category, $scope, $location, $window, $mdSidenav, $rootScope, $facebook) {
        let self = this;
        this.activeIndex = 0;
        Category.find().then((resp) => {
            self.categories = resp.data;
            for(var i in self.categories){
                if($window.location.href.indexOf(self.categories[i]._id) != -1){
                    self.activeIndex = i;
                }
            }
            if($location.path() === '/'){
                $location.path(`/${self.categories[0]._id}/moi-nhat`);
            }
        });
        this.goTo = (id, index) => {
            self.activeIndex = index;
            $location.path(`${id}/moi-nhat`);
        }
        this.openMenu = () => {
            $mdSidenav('left').toggle();
        }
        this.closeGoTo = (path, index) => {
            $mdSidenav('left').close();
            self.activeIndex = index;
            $location.path(path);
        }        
        this.login = () => {
            $facebook.login().then((resp) => {
                if(resp.status !== 'connected'){
                    return alert('Không thể login facebook');
                }
                $window.localStorage.userId = resp.authResponse.userID;
                $rootScope.userID = $window.localStorage.userId;
            }).catch((err) => {
                console.error(err);
            });
        }
    }]
});
