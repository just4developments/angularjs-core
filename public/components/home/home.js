app.component('home', {
    template: require('./home.html'),
    controller: ['$config', 'Product', 'Category', '$scope', 'Upload', function ($config, Product, Category, $scope, Upload) {
        require('./home.scss');
        var self = this;
        this.p = {};
        this.isAdd = false;
        this.$routerOnActivate = (next) => {

        };
        Product.find().then((resp) => {
            self.list = resp.data;
            Category.find().then((resp) => {
                self.categories = resp.data;
            });
        });
        this.save = (p) => {
            console.log(p);
            Upload.uploadFileToUrl(p, $config.apiUrl + '/product').then((resp) => {
                self.list.push(resp.data.ops[0]);
                self.isAdd = false;
            }).catch((err) => {
                console.error(err);
            });
        };
    }]
});