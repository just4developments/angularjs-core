app.component('productHot', {
    template: require('./product-hot.html'),
    bindings: { categoryId: '<' },
    controller: ['$config', 'Product', 'Category', '$scope', 'Upload', '$window', '$rootScope', '$mdDialog', '$mdMedia', function ($config, Product, Category, $scope, Upload, $window, $rootScope, $mdDialog, $mdMedia) {
        require('./product-hot.scss');
        let self = this;
        let recordsPerPage = $mdMedia('xs') ? 3 : ($mdMedia('sm') ? 4 : 8);
        let maxSize = $mdMedia('xs') ? 1 : ($mdMedia('sm') ? 2 : 5);
        let getRandomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        Product.find(this.categoryId, 'hot', recordsPerPage).then((resp) => {
            if(!resp.data || resp.data.length === 0) return;
            let rs = [];
            let getRdItem = (num) => {
                while(num-- > 0){
                    let rd = getRandomInt(0, resp.data.length-1);            
                    rs.push(resp.data[rd]);
                    resp.data.splice(rd, 1);
                }
            };
            getRdItem(maxSize);
            self.list = rs;
        });
        this.goTo = (filter) => {
            setTimeout(() => {
               $window.document.querySelector('#proSpecial').click();
            });
        }
    }]
});
